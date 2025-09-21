
# Perbaikan Bug Constraint Pada Hapus Produk

## Latar Belakang

Ketika menghapus produk, terjadi error constraint yang disebabkan oleh adanya relasi dengan data pesanan (order). Error ini muncul karena sistem mencoba menghapus produk yang masih terhubung dengan pesanan yang ada.

## Solusi

Untuk mengatasi masalah ini, saya memodifikasi `deleteProduct` pada file `controller/product.js`. Sebelum menghapus produk, saya menambahkan langkah untuk menghapus semua pesanan yang terkait dengan produk tersebut. Dengan demikian, relasi yang menghalangi penghapusan produk akan dihilangkan terlebih dahulu, sehingga proses penghapusan produk dapat berjalan tanpa error.

