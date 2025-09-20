# Dokumentasi Perubahan Halaman AddProduct

Dokumen ini menjelaskan perubahan dan penambahan fitur pada halaman `AddProduct` di sisi frontend, serta perbaikan bug yang telah dilakukan.

## 1. Penambahan Fitur Kategori Produk

### Latar Belakang
Sebelumnya, produk yang ditambahkan tidak memiliki opsi untuk memilih kategori. Kini, fungsionalitas pemilihan kategori telah ditambahkan untuk mengorganisir produk dengan lebih baik.

### Cara Penggunaan
1.  **Pilih Kategori**: Di halaman `AddProduct`, Anda akan menemukan bagian baru di kolom kanan dengan judul "Category".
2.  **Dropdown**: Klik pada dropdown "Select a category".
3.  **Pilih Opsi**: Pilih salah satu kategori yang tersedia dari daftar. Daftar kategori ini diambil secara dinamis dari backend.
4.  **Pengiriman Data**: Saat Anda menekan tombol "Add Product", `categoryId` yang Anda pilih akan ikut terkirim bersama data produk lainnya ke backend.

### Detail Implementasi
*   **Frontend (`frontend/src/page/AddProduct.jsx`)**:
    *   Menambahkan state `categories` untuk menyimpan daftar kategori yang diambil dari API.
    *   Menggunakan `useEffect` untuk memanggil endpoint `/api/category` saat komponen dimuat dan mengisi state `categories`.
    *   Menambahkan elemen `<select>` di JSX yang diisi dengan data dari state `categories`.
    *   Menambahkan validasi agar pengguna harus memilih kategori sebelum submit form.
*   **Backend (`backend/controller/product.js`)**:
    *   Fungsi `createProduct` telah dimodifikasi untuk menerima `categoryId` dari request body.
    *   Logika penambahan produk kini menyertakan `categoryId` untuk menghubungkan produk dengan kategori yang dipilih di database.

## 2. Pratinjau Gambar Saat Upload

### Latar Belakang
Sebelumnya, setelah memilih gambar untuk diunggah, tidak ada indikasi visual gambar mana yang telah dipilih. Kini, pratinjau gambar akan ditampilkan.

### Cara Penggunaan
1.  **Pilih File**: Di bagian "Media", klik "Upload a file" atau seret file gambar ke area yang ditentukan.
2.  **Pratinjau Muncul**: Setelah Anda memilih file gambar, pratinjau gambar akan langsung muncul di area upload, menggantikan ikon kamera default.
3.  **Nama File**: Nama file yang dipilih juga akan ditampilkan di bawah area pratinjau.

### Detail Implementasi
*   **Frontend (`frontend/src/page/AddProduct.jsx`)**:
    *   Menambahkan state `imagePreview` untuk menyimpan URL data gambar yang dipilih.
    *   Fungsi `handleFileChange` diperbarui untuk menggunakan `FileReader` guna membaca file gambar yang dipilih dan mengonversinya menjadi URL data (`data URL`).
    *   URL data ini kemudian disimpan ke state `imagePreview`.
    *   JSX di bagian "Media" kini secara kondisional menampilkan tag `<img>` dengan `src` dari `imagePreview` jika ada, atau ikon kamera default jika tidak ada gambar yang dipilih.

## 3. Perbaikan Bug: `categories.map is not a function`

### Latar Belakang
Terjadi error `TypeError: categories.map is not a function` karena respons dari API `getCategories` tidak langsung berupa array, melainkan objek respons Axios yang membungkus data array di dalamnya.

### Perbaikan
*   **Frontend (`frontend/src/page/AddProduct.jsx`)**:
    *   Di dalam `useEffect` yang memanggil `getCategories`, baris `setCategories(data)` diubah menjadi `setCategories(response.data)`.
    *   Perubahan ini memastikan bahwa hanya array kategori yang sebenarnya yang disimpan ke dalam state `categories`, sehingga metode `.map()` dapat dipanggil dengan benar pada array tersebut.