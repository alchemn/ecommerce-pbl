# Backend API Manajemen Produk

Sebuah API sederhana untuk manajemen produk dan user menggunakan Node.js, Express, dan Prisma.

## Ringkasan Perubahan & Perbaikan Kode

Tujuan utama dari perubahan ini adalah untuk memperbaiki fungsionalitas unggah gambar yang sebelumnya tidak akan berfungsi dan untuk meningkatkan kualitas kode secara keseluruhan.

### Masalah Utama pada Kode Awal

Logika unggah gambar sebelumnya tidak akan berfungsi karena beberapa kesalahan konseptual dalam implementasinya. Prosesnya dibagi menjadi dua langkah (upload file lalu simpan data), tetapi implementasi di backend tidak mendukung alur ini dengan benar.

### Rincian Perbaikan

| File | Masalah pada Kode Lama | Solusi & Perbaikan |
| :--- | :--- | :--- |
| **`utils/uploadFileHandler.js`** | Fungsi `handleImageUpload` mencoba menggabungkan dua logika (URL & file) dan memanggil middleware `multer` dengan cara yang tidak standar, sehingga tidak akan berfungsi. | Disederhanakan menjadi satu file konfigurasi `multer` yang bersih dan dapat digunakan kembali (`reusable`) di rute mana pun. Ini adalah praktik standar di Express. |
| **`router/product.js`** | • Tidak ada endpoint khusus untuk proses upload.<br>• Rute `createProduct` salah mengharapkan data file dari `req.body`, padahal seharusnya dari `req.file`. | • Menambahkan endpoint baru `POST /product/upload` yang didedikasikan untuk unggah file.<br>• Endpoint ini menggunakan middleware `multer` dengan benar sebelum masuk ke controller. |
| **`controller/product.js`** | Fungsi `createProduct` tidak bisa menerima file yang diunggah karena `multer` menyimpan info file di `req.file`, bukan `req.body`. | Logika `createProduct` diperbarui untuk memeriksa `req.file`. Jika ada, path gambar diambil dari situ. Jika tidak, ia akan fallback ke `req.body.image` (untuk kasus jika frontend mengirim URL). |
| **`index.js`** | Folder `public/uploads` tidak disajikan (served) secara statis, sehingga gambar yang sudah diunggah tidak akan bisa diakses dari browser. | Menambahkan `app.use('/public/uploads', express.static('public/uploads'))` untuk membuat folder `uploads` dapat diakses secara publik. |
| **`package.json`** | Tidak ada skrip standar untuk menjalankan server. | Menambahkan skrip `start` sehingga server bisa dijalankan dengan `npm start`. |

---

## Rencana Pengembangan (To-Do List)

Berikut adalah daftar fitur dan perbaikan penting yang perlu diimplementasikan untuk membuat API ini menjadi production-ready.

### 1. Keamanan (Prioritas Utama)
- [ ] **Implementasi Hashing Password**: Gunakan library seperti `bcrypt` untuk meng-hash password saat user mendaftar dan memverifikasinya saat login.
- [ ] **Implementasi Autentikasi (JWT)**: Selesaikan fungsi `loginUser` untuk menghasilkan JSON Web Token (JWT) saat login berhasil.
- [ ] **Buat Middleware Autentikasi**: Fungsikan `authMiddleware.js` untuk membaca token JWT dan melindungi rute-rute yang memerlukan login.

### 2. Otorisasi
- [ ] **Cek Kepemilikan**: Tambahkan logika pada endpoint `update` dan `delete` untuk memastikan hanya user yang memiliki produk yang dapat mengubah atau menghapusnya.
- [ ] **Manajemen Role**: Implementasikan logika berdasarkan `role` (misalnya, hanya `ADMIN` yang bisa menghapus user lain).

### 3. Fungsionalitas & Endpoint
- [ ] **CRUD untuk Kategori**: Buat endpoint CRUD (Create, Read, Update, Delete) lengkap untuk model `Category`.
- [ ] **CRUD untuk Profil**: Buat endpoint untuk membuat dan memperbarui `Profile` user.
- [ ] **Sistem Order**: Kembangkan logika dan endpoint untuk membuat dan melihat `Order`.
- [ ] **Update Gambar Produk**: Sempurnakan endpoint `updateProduct` agar user bisa mengganti gambar produk yang sudah ada.

### 4. Kualitas Kode & Validasi
- [ ] **Validasi Input**: Tambahkan validasi yang kuat untuk semua data yang masuk ke API (misalnya menggunakan `Joi` atau `express-validator`) untuk mencegah data yang salah masuk ke database.
- [ ] **Error Handling Terpusat**: Fungsikan `errorMiddleware.js` untuk menangani semua error secara konsisten.

---

## Panduan Implementasi Fitur Order (Simulasi)

Karena proyek ini adalah simulasi dan tidak menggunakan sistem login (JWT), kita akan membuat endpoint order dengan mengirim `userId` secara manual di body permintaan. Berikut adalah panduan langkah demi langkah untuk Anda ikuti.

### Langkah 1: Buat Controller untuk Order

Buat file baru di `controller/order.js` dan isi dengan kode berikut:

```javascript
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Fungsi untuk membuat order baru
export const createOrder = async (req, res) => {
  // Ambil userId dan daftar produk dari body permintaan
  const { userId, products } = req.body; // products adalah array of object, contoh: [{ "id": 1 }, { "id": 2 }]

  // Validasi sederhana untuk simulasi
  if (!userId || !products || products.length === 0) {
    return res.status(400).json({ message: "userId dan daftar produk diperlukan." });
  }

  try {
    // Buat order baru di database dan hubungkan dengan user dan produk-produknya
    const newOrder = await prisma.order.create({
      data: {
        userId: userId,
        products: {
          connect: products, // Menghubungkan produk berdasarkan ID
        },
      },
      include: {
        user: true, // Sertakan data user dalam respons
        products: true, // Sertakan data produk dalam respons
      },
    });

    res.status(201).json(newOrder);
  } catch (error) {
    // Tangani jika user atau produk tidak ditemukan
    if (error.code === 'P2025') {
        return res.status(404).json({ message: "User atau salah satu produk tidak ditemukan." });
    }
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};

// Fungsi (opsional) untuk melihat semua order yang sudah dibuat
export const getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: { select: { email: true } },
        products: { select: { name: true, price: true } },
      },
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

### Langkah 2: Buat Router untuk Order

Buat file baru di `router/order.js` dan isi dengan kode berikut:

```javascript
import express from 'express';
import { createOrder, getOrders } from '../controller/order.js';

const orderRouter = express.Router();

// Rute untuk membuat order baru
orderRouter.post('/', createOrder);

// Rute untuk melihat semua order
orderRouter.get('/', getOrders);

export default orderRouter;
```

### Langkah 3: Hubungkan Router di `index.js`

Buka file `index.js` Anda dan tambahkan dua baris berikut untuk mendaftarkan router order.

```javascript
// ... (di bagian atas bersama import lainnya)
import orderRouter from './router/order.js';

// ... (di bagian bawah bersama app.use lainnya)
app.use('/order', orderRouter);
```

### Langkah 4: Cara Menguji Endpoint Order

Setelah Anda menyimpan semua file di atas dan menjalankan server (`npm start`), Anda bisa mengujinya.

*   **Endpoint**: `POST http://localhost:9009/order`
*   **Method**: `POST`
*   **Body**: `raw (JSON)`
*   **Contoh Body Permintaan**:
    Pastikan `userId` dan `id` produk yang Anda masukkan sudah ada di database.
    ```json
    {
      "userId": 1,
      "products": [
        { "id": 1 },
        { "id": 2 }
      ]
    }
    ```
*   **Respons Sukses**: Anda akan mendapatkan detail order yang baru saja dibuat, lengkap dengan data user dan produknya.

---

## Panduan Setup & Instalasi

1.  **Clone Repositori**
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd backend
    ```

2.  **Install Dependensi**
    ```bash
    npm install
    ```

3.  **Setup Database & Environment**
    *   Buat file baru bernama `.env` di root proyek.
    *   Isi file tersebut dengan URL koneksi database Anda. Gunakan contoh di bawah sebagai template.
    ```env
    # Contoh untuk PostgreSQL
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    ```

4.  **Jalankan Migrasi Database**
    Perintah ini akan membuat tabel-tabel yang diperlukan di database Anda sesuai dengan skema Prisma.
    ```bash
    npx prisma migrate dev
    ```

5.  **Generate Prisma Client**
    Penting untuk meng-generate Prisma Client setelah ada perubahan skema.
    ```bash
    npx prisma generate
    ```

6.  **Jalankan Server**
    ```bash
    npm start
    ```
    Server akan berjalan di `http://localhost:9009`.

---

## Panduan Penggunaan API

Proses pembuatan produk terdiri dari 2 langkah: unggah gambar untuk dapat URL, lalu buat produk dengan URL tersebut.

### 1. Unggah Gambar

*   **Endpoint**: `POST /product/upload`
*   **Method**: `POST`
*   **Body**: `form-data`
    *   **Key**: `image`
    *   **Value**: `(Pilih file gambar dari komputer Anda)`
*   **Respons Sukses**: Salin nilai `image` dari respons untuk digunakan di langkah berikutnya.
    ```json
    {
        "message": "File Sucsess Uploaded",
        "image": "/public/uploads/image-1678886400000.jpg"
    }
    ```

### 2. Membuat Produk Baru

*   **Endpoint**: `POST /product`
*   **Body**: `raw (JSON)`
*   **Contoh Body**:
    ```json
    {
      "name": "Nama Produk Anda",
      "description": "Deskripsi singkat produk.",
      "price": 25000,
      "userId": 1,
      "categoryId": 1, 
      "image": "/public/uploads/image-1678886400000.jpg"
    }
    ```

### Endpoint Lainnya

*   `GET /product`: Mendapatkan semua produk.
*   `GET /user`: Mendapatkan semua user.

---

## Bonus: Penjelasan Konsep Props di React

`Props` (kependekan dari *properties*) adalah cara React untuk memberikan data dari komponen *parent* (induk) ke komponen *child* (anak). Anggap saja seperti argumen pada sebuah fungsi.

**Analogi**: Jika komponen adalah sebuah fungsi yang menghasilkan tampilan (UI), maka `props` adalah parameter yang Anda masukkan ke fungsi tersebut untuk mengubah apa yang ditampilkannya.

Dengan `props`, kita bisa membuat komponen yang **bisa dipakai ulang (reusable)**. Anda buat satu kali, gunakan berkali-kali dengan data yang berbeda.

### Contoh 1: Membuat Komponen `Button` Reusable

Kita bisa membuat komponen tombol sendiri agar tampilannya selalu konsisten.

**1. Buat file `components/Button.jsx`**
```jsx
// Komponen ini menerima 3 props: `onClick`, `type`, dan `children`.
// `children` adalah properti spesial yang berisi apa pun di antara tag pembuka dan penutup komponen.
// Contoh: <Button>Ini adalah children</Button>

function Button({ onClick, children, type = 'primary' }) {
  // Atur style berdasarkan props 'type'
  const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: 'white',
  };

  const buttonStyle = type === 'primary' 
    ? { ...baseStyle, backgroundColor: '#007BFF' } 
    : { ...baseStyle, backgroundColor: '#6c757d' };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

**2. Gunakan komponen `Button` di file lain**
```jsx
import Button from './components/Button';

function App() {
  const handleSimpan = () => alert('Tersimpan!');
  const handleBatal = () => alert('Dibatalkan!');

  return (
    <div>
      {/* Tombol pertama (default type adalah 'primary') */}
      <Button onClick={handleSimpan}>
        Simpan Perubahan
      </Button>

      {/* Tombol kedua dengan type 'secondary' */}
      <Button onClick={handleBatal} type="secondary">
        Batal
      </Button>
    </div>
  );
}
```

### Contoh 2: Membuat Komponen `InputField` Reusable

Kita bisa membuat komponen yang berisi `label` dan `input` sekaligus.

**1. Buat file `components/InputField.jsx`**
```jsx
// Komponen ini menerima props untuk label, tipe input, value, dan fungsi onChange
function InputField({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ display: 'block', marginBottom: '5px' }}>
        {label}
      </label>
      <input 
        type={type} 
        value={value} 
        onChange={onChange}
        placeholder={placeholder || ''}
        style={{ width: '100%', padding: '8px' }}
      />
    </div>
  );
}

export default InputField;
```

**2. Gunakan di `ProductForm.jsx`**

Sekarang kita bisa membuat form produk menjadi lebih bersih dengan komponen `InputField` yang baru.

```jsx
import React, { useState } from 'react';
import InputField from './components/InputField'; // Impor komponen baru
import Button from './components/Button'; // Impor komponen Button

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // ... state lainnya ...

  const handleSubmit = async (event) => { /* ... logika submit ... */ };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Tambah Produk</h2>

      <InputField 
        label="Nama Produk:"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama produk"
      />

      <InputField 
        label="Harga:"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Masukkan harga"
      />

      {/* ... input untuk file ... */}

      <Button type="primary" onClick={handleSubmit}>
        {isLoading ? 'Menyimpan...' : 'Simpan Produk'}
      </Button>
    </form>
  );
}
```
Dengan cara ini, Anda bisa membuat berbagai komponen kecil (Tombol, Input, Label, Card, dll.) yang konsisten dan bisa dipakai di seluruh bagian aplikasi Anda, hanya dengan memberikan `props` yang berbeda.

---

## Contoh Implementasi Frontend (React)

Berikut adalah contoh komponen React untuk form tambah produk yang mengimplementasikan alur 2 langkah (upload file lalu simpan data) secara mulus.

**Komponen `ProductForm.jsx`**
```jsx
import React, { useState } from 'react';

function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setError('Silakan pilih gambar produk terlebih dahulu.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // LANGKAH 1: UPLOAD GAMBAR
      const formData = new FormData();
      formData.append('image', selectedFile);

      const uploadRes = await fetch('http://localhost:9009/product/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error('Gagal mengunggah gambar.');
      }

      const uploadData = await uploadRes.json();
      const imageUrl = uploadData.image;

      // LANGKAH 2: KIRIM DATA PRODUK LENGKAP
      const productData = {
        name: name,
        price: Number(price),
        image: imageUrl,
        userId: 1, // Ganti dengan ID user yang sesuai
        categoryId: 1, // Ganti dengan ID kategori yang sesuai
      };

      const createRes = await fetch('http://localhost:9009/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!createRes.ok) {
        throw new Error('Gagal menyimpan data produk.');
      }

      const newProduct = await createRes.json();
      alert(`Produk "${newProduct.name}" berhasil disimpan!`);
      
      // Kosongkan form setelah berhasil
      setName('');
      setPrice('');
      setSelectedFile(null);
      event.target.reset();

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Tambah Produk</h2>
      
      <div>
        <label>Nama Produk:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Harga:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Gambar Produk:</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Menyimpan...' : 'Simpan Produk'}
      </button>
    </form>
  );
}

export default ProductForm;
```

---

## Peningkatan Kualitas Kode

*   **ESLint**: Proyek ini sekarang dilengkapi dengan ESLint untuk menjaga konsistensi dan kualitas kode. Untuk menjalankan linter, gunakan perintah:
    ```bash
    npx eslint .
    ```
