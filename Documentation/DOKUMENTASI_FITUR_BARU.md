# Dokumentasi Fitur Baru: Menampilkan Alamat Pengguna pada Pesanan

Dokumen ini menjelaskan fitur baru yang telah ditambahkan ke dalam sistem, yaitu kemampuan untuk menampilkan alamat pengguna pada halaman detail pesanan.

## Latar Belakang

Ketika melihat detail sebuah pesanan, informasi mengenai alamat pengiriman sangatlah penting. Sebelumnya, data pesanan hanya menampilkan informasi dasar pengguna, tanpa menyertakan alamatnya. Untuk melihat alamat, kita perlu melakukan query terpisah ke data profil pengguna.

Untuk mempermudah dan mengefisienkan proses, kita telah menambahkan fitur baru yang memungkinkan sistem untuk secara otomatis menampilkan alamat pengguna setiap kali kita mengakses detail pesanan.

## Perubahan Teknis

Perubahan utama dilakukan pada fungsi `getOrderById` di dalam file `controller/order.js`. Kita menggunakan fitur **`include` bersarang** dari Prisma untuk mengambil data yang saling berelasi.

Bayangkan Anda meminta data pesanan kepada sistem. Selain memberikan data pesanan itu sendiri, Anda juga memberikan instruksi tambahan:

**"Tolong sertakan juga data pengguna yang memesan. Dan untuk pengguna tersebut, tolong sertakan juga data profilnya."**

Dengan cara ini, kita bisa mendapatkan data pesanan, data pengguna, dan data profil (yang berisi alamat) dalam satu kali permintaan.

Berikut adalah potongan kode yang telah diubah:

```javascript
// ...
include: {
  user: {
    include: {
      profile: true, // Ini adalah instruksi untuk menyertakan data profil
    },
  },
  product: true,
},
// ...
```

## Contoh Hasil

Setelah perubahan ini, ketika Anda mengakses endpoint `GET /order/:id`, respons JSON yang Anda terima akan terlihat seperti ini:

```json
{
  "id": 1,
  "createdAt": "2025-09-19T00:00:00.000Z",
  "userId": 1,
  "user": {
    "id": 1,
    "email": "user@example.com",
    "role": "BUYER",
    "profile": { // Data profil sekarang ikut ditampilkan
      "id": 1,
      "name": "Nama Pengguna",
      "addres": "Jalan Jenderal Sudirman No. 1, Jakarta", // Alamat pengguna
      "phone": "081234567890",
      "userId": 1
    }
  },
  "product": [
    // ... detail produk
  ]
}
```

Dengan adanya fitur ini, informasi alamat pengguna sekarang dapat diakses dengan lebih mudah dan cepat, langsung dari halaman detail pesanan.