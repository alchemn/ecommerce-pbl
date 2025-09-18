# Dokumentasi Perbaikan Sistem Order

Dokumen ini menjelaskan perbaikan yang telah dilakukan pada sistem pembuatan pesanan (order) agar lebih mudah dipahami, terutama bagi pengguna non-teknis.

## Masalah Awal

Sebelumnya, sistem mengalami error ketika mencoba membuat pesanan baru. Pesan error yang muncul adalah "An operation failed because it depends on one or more records that were required but not found," yang intinya berarti ada data produk yang tidak ditemukan.

## Penyebab Masalah

Bayangkan Anda ingin memesan beberapa barang dari sebuah toko online. Anda memberikan daftar barang yang ingin Anda beli kepada kasir. Namun, salah satu barang yang ada di daftar Anda ternyata tidak ada atau sudah habis di toko tersebut. Akibatnya, kasir tidak bisa memproses pesanan Anda.

Masalah yang terjadi pada sistem kita serupa dengan ilustrasi di atas. Sistem menerima pesanan untuk beberapa produk, tetapi ada satu atau lebih ID produk yang diberikan tidak ada di dalam database (daftar produk). Hal ini menyebabkan sistem gagal membuat pesanan.

## Solusi dan Perbaikan

Untuk mengatasi masalah ini, kita telah melakukan perbaikan pada logika sistem di file `controller/order.js`. Perbaikan ini bisa diibaratkan seperti memberikan instruksi baru kepada kasir:

**"Sebelum kamu membuat pesanan, tolong periksa dulu satu per satu barang yang ada di daftar pesanan. Pastikan semua barang itu ada di toko. Jika ada satu saja barang yang tidak ada, jangan proses pesanannya dan beri tahu pelanggan bahwa ada barang yang tidak ditemukan."**

Secara teknis, berikut adalah perubahan yang dilakukan:

1.  **Pengecekan Produk**: Sebelum membuat pesanan, sistem sekarang akan memeriksa setiap `productId` yang dikirimkan oleh pengguna.
2.  **Validasi**: Sistem akan memastikan bahwa semua produk dengan ID tersebut benar-benar ada di dalam database.
3.  **Pesan Error yang Lebih Jelas**: Jika ada produk yang tidak ditemukan, sistem tidak akan lagi menampilkan pesan error yang membingungkan. Sebaliknya, sistem akan memberikan pesan yang jelas seperti "One or more products not found" (Satu atau lebih produk tidak ditemukan).

## Cara Penggunaan yang Benar

Dengan perbaikan ini, cara membuat pesanan tetap sama, tetapi sekarang sistem lebih pintar dan aman. Untuk membuat pesanan, Anda perlu mengirimkan data berikut:

-   `userId`: ID pengguna yang melakukan pesanan.
-   `productIds`: Sebuah daftar (array) yang berisi ID dari produk-produk yang ingin dipesan.

**Contoh Permintaan (Request) yang Benar:**

```json
{
  "userId": 1,
  "productIds": [1, 2]
}
```

Pastikan semua ID produk yang Anda masukkan dalam `productIds` adalah ID yang valid dan ada di dalam sistem. Anda bisa mendapatkan daftar produk yang valid dengan mengakses endpoint `GET /product`.

Dengan adanya perbaikan ini, sistem pemesanan sekarang lebih andal dan mudah digunakan.