
# Dokumentasi Masalah dan Perbaikan pada Entitas Order

Dokumen ini menjelaskan masalah yang ditemukan pada sistem order, meliputi skema database Prisma dan controller terkait. Disediakan juga langkah-langkah perbaikan yang lengkap.

## 1. Analisis Masalah

Terdapat ketidaksesuaian antara skema Prisma (`schema.prisma`) dan logika bisnis di dalam controller (`controller/order.js`) untuk entitas `Order`.

### a. Skema Prisma (`schema.prisma`)

```prisma
model Order {
  id        Int      @id @default(autoincrement())
  createdAt DateTime @default(now())

  // Relasi ke User
  userId Int
  user   User @relation(fields: [userId], references: [id])

  // Relasi ke Product (Many-to-Many)
  product Product[]
}
```

Skema di atas menunjukkan bahwa sebuah `Order` dapat memiliki **banyak** `Product` (relasi *many-to-many*). Ini terlihat dari penggunaan `Product[]` pada field `product`.

### b. Controller (`controller/order.js`)

```javascript
export const createOrder = async (req, res) => {
    try {
        const { productId, userId } = req.body;
        const order = await prisma.order.create({
            data: {
                product: {
                    connect: {
                        id: Number(productId)
                    }
                },
                user: {
                    connect: {
                        id: Number(userId)
                    }
                }
            }
        });
        // ...
    } catch (error) {
        // ...
    }
};
```

Controller `createOrder` hanya menerima satu `productId` dari `req.body` dan mencoba menghubungkannya ke satu `Order`. Ini tidak sesuai dengan skema Prisma yang mengharapkan *array* dari produk.

## 2. Langkah-Langkah Perbaikan

Untuk mengatasi masalah ini, kita perlu memodifikasi controller `createOrder` agar dapat menerima dan memproses array dari `productId`.

### Langkah 1: Modifikasi Controller `createOrder`

Ubah implementasi `controller/order.js` agar dapat menerima array `productIds`.

```javascript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createOrder = async (req, res) => {
  try {
    // 1. Menerima array productIds dari req.body
    const { productIds, userId } = req.body;

    // 2. Validasi input
    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
      return res.status(400).json({
        message: "productIds must be a non-empty array.",
      });
    }

    // 3. Membuat order baru dengan menghubungkan beberapa produk
    const order = await prisma.order.create({
      data: {
        user: {
          connect: {
            id: Number(userId),
          },
        },
        product: {
          connect: productIds.map((id) => ({ id: Number(id) })),
        },
      },
      include: {
        product: true, // Opsional: untuk menampilkan produk yang terhubung dalam response
      },
    });

    res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
```

### Perubahan Utama:

1.  **Input `productIds`**: `req.body` sekarang diharapkan berisi `productIds` dalam bentuk *array*.
2.  **Validasi**: Ditambahkan validasi untuk memastikan `productIds` adalah *array* yang tidak kosong.
3.  **`connect` dengan `map`**: Fungsi `map` digunakan untuk mengubah array `productIds` menjadi format yang diterima oleh Prisma untuk relasi *many-to-many*.
4.  **`include`**: Ditambahkan `include` untuk menampilkan detail produk dalam respons JSON.

### Langkah 2: Uji Coba dengan API Client

Setelah memodifikasi controller, uji coba endpoint `POST /orders` menggunakan API client seperti Postman atau Insomnia.

**URL**: `http://localhost:3000/api/orders` (sesuaikan dengan URL Anda)
**Method**: `POST`
**Body** (JSON):

```json
{
  "userId": 1,
  "productIds": [1, 2]
}
```

Pastikan `userId` dan `productIds` yang dikirim valid dan ada di dalam database Anda.

## Kesimpulan

Dengan mengikuti langkah-langkah di atas, masalah ketidaksesuaian antara skema dan controller akan teratasi. Sistem sekarang dapat membuat pesanan yang berisi beberapa produk sekaligus, sesuai dengan desain skema database.
