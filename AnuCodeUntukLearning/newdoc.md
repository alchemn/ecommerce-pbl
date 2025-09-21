# Dokumentasi Fitur Baru: Edit dan Hapus Produk

Dokumen ini menjelaskan implementasi fitur baru untuk mengedit dan menghapus produk di antarmuka pengguna (frontend).

## 1. Ringkasan Fitur

-   **Edit Produk:** Pengguna sekarang dapat mengedit informasi produk yang mereka miliki.
-   **Hapus Produk:** Pengguna dapat menghapus produk yang mereka miliki.
-   **Kontrol Akses:** Tombol "Edit" dan "Hapus" hanya akan muncul pada produk jika pengguna yang sedang login adalah pemilik produk tersebut.

## 2. Perubahan Teknis

### 2.1. Modifikasi API (`src/api/index.js`)

Dua fungsi baru telah ditambahkan untuk berinteraksi dengan backend:

-   `updateProduct(id, formData)`: Mengirim permintaan `PUT` ke `/product/:id` untuk memperbarui produk dengan data baru dari `formData`.
-   `deleteProduct(id)`: Mengirim permintaan `DELETE` ke `/product/:id` untuk menghapus produk.

### 2.2. Halaman Edit Produk (`src/page/EditProduct.jsx`)

-   Halaman baru ini mengambil data produk yang ada berdasarkan `id` dari URL.
-   Formulir diisi dengan data produk saat ini, memungkinkan pengguna untuk memodifikasinya.
-   Terdapat tombol "Update Product" yang akan mengirimkan data yang diperbarui ke backend.
-   Terdapat tombol "Delete Product" dengan dialog konfirmasi untuk menghapus produk.

### 2.3. Daftar Produk (`src/components/ProductGrid.jsx`)

-   Komponen ini sekarang mengambil ID pengguna yang sedang login dari `localStorage`.
-   Tombol "Edit" dan "Hapus" ditambahkan ke setiap kartu produk.
-   Tombol-tombol ini hanya ditampilkan jika `product.userId` cocok dengan ID pengguna yang sedang login, untuk memastikan hanya pemilik yang dapat mengelola produk mereka.
-   Tombol "Edit" mengarahkan pengguna ke halaman `EditProduct` untuk produk yang sesuai.
-   Tombol "Hapus" memicu fungsi `handleDelete` yang memanggil `deleteProduct` dari API dan menyegarkan daftar produk setelah berhasil dihapus.

### 2.4. Routing (`src/App.jsx`)

-   Rute baru ditambahkan untuk halaman edit produk:
    ```jsx
    <Route path="/edit-product/:id" element={<EditProduct />} />
    ```

## 3. Cara Menggunakan

1.  Login ke aplikasi.
2.  Buka halaman "All Products" (`/product-list`).
3.  Pada produk yang Anda miliki, Anda akan melihat tombol "Edit" dan "Hapus".
4.  Klik "Edit" untuk membuka halaman edit dan mengubah detail produk.
5.  Klik "Hapus" untuk menghapus produk (akan ada permintaan konfirmasi).
