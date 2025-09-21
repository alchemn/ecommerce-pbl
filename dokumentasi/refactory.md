# Dokumentasi Refactoring

Dokumen ini menjelaskan perubahan refactoring yang dilakukan pada codebase frontend untuk meningkatkan kualitas, keterbacaan, dan kemudahan pengelolaan kode.

---

### 1. Pemisahan Logika Sorting dari Komponen Grid Produk

**File yang Terlibat:**
- `src/components/ProductGrid.jsx` (Di-refactor)
- `src/page/ProductList.jsx` (Di-refactor)
- `src/components/SortDropdown.jsx` (File baru)

**Apa yang Di-slice/Diubah:**

Logika untuk mengurutkan (sorting) produk, state management (`useState`) untuk menyimpan metode sorting, dan elemen UI (dropdown `<select>`) diekstrak keluar dari `ProductGrid.jsx`.

**Alasan Refactoring:**

Sebelumnya, `ProductGrid.jsx` memiliki terlalu banyak tanggung jawab (prinsip *Single Responsibility Principle* dilanggar). Komponen ini bertugas untuk:
1. Menampilkan daftar produk.
2. Mengelola state untuk sorting.
3. Menampilkan UI untuk memilih metode sorting.
4. Menjalankan logika sorting.

Dengan memisahkan logika ini, kita mencapai **Separation of Concerns** yang lebih baik:
- **`ProductList.jsx`** (sebagai komponen induk/halaman) sekarang bertanggung jawab penuh atas data dan state, termasuk bagaimana data diurutkan.
- **`SortDropdown.jsx`** menjadi komponen UI murni yang bisa digunakan kembali (*reusable*) khusus untuk menampilkan pilihan sorting.
- **`ProductGrid.jsx`** sekarang menjadi komponen presentasional (*dumb component*) yang lebih sederhana. Tugasnya hanya satu: menerima data produk yang sudah diurutkan dan menampilkannya dalam bentuk grid.

Ini membuat setiap komponen lebih fokus, mudah diuji, dan mudah dipahami.

---

### 2. Sentralisasi Logika Form dengan Custom Hook

**File yang Terlibat:**
- `src/page/AddProduct.jsx` (Di-refactor)
- `src/page/EditProduct.jsx` (Di-refactor)
- `src/hooks/useProductForm.js` (File baru)

**Apa yang Di-slice/Diubah:**

Semua logika yang berkaitan dengan manajemen form—seperti state untuk input, notifikasi, status loading, pratinjau gambar, dan fungsi untuk submit data ke API—diekstrak dari `AddProduct.jsx` dan `EditProduct.jsx` ke dalam sebuah custom hook.

**Alasan Refactoring:**

Kedua file tersebut memiliki duplikasi kode yang sangat signifikan. Hampir semua logika di dalamnya identik, melanggar prinsip **Don't Repeat Yourself (DRY)**.

Dengan membuat hook `useProductForm`, kita mendapatkan beberapa keuntungan:
- **Menghilangkan Duplikasi:** Kode logika sekarang hanya ada di satu tempat (`useProductForm.js`).
- **Komponen Lebih Bersih:** Komponen `AddProduct` dan `EditProduct` menjadi sangat ringkas dan bersih, karena sekarang sebagian besar isinya adalah JSX untuk tampilan.
- **Konsistensi:** Perilaku kedua form dijamin konsisten. Jika ada perubahan logika di masa depan (misalnya, cara menampilkan notifikasi), kita hanya perlu mengubahnya di satu file.

---

### 3. Abstraksi Logika Fetching Data Admin

**File yang Terlibat:**
- `src/page/AdminProductList.jsx` (Di-refactor)
- `src/page/AdminOrderList.jsx` (Di-refactor)
- `src/hooks/useAdminData.js` (File baru)
- `src/components/admin/ListUser.jsx` (Tidak diubah)

**Apa yang Di-slice/Diubah:**

Pola umum untuk mengambil data dari API di halaman admin—termasuk state untuk `loading` dan `error`, logika paginasi, dan fungsi untuk memuat ulang data—diekstrak ke dalam custom hook `useAdminData`.

**Alasan Refactoring:**

Sama seperti kasus form, halaman `AdminProductList` dan `AdminOrderList` memiliki pola logika yang berulang untuk menampilkan data dalam bentuk tabel dengan paginasi. Ini juga melanggar prinsip **DRY**.

Custom hook `useAdminData` dibuat untuk menjadi solusi generik:
- **Reusable:** Hook ini bisa menerima fungsi API mana pun sebagai argumen, membuatnya fleksibel untuk digunakan di berbagai halaman.
- **Menyederhanakan Komponen:** Komponen admin sekarang hanya perlu memanggil hook ini untuk mendapatkan data yang siap ditampilkan, state loading/error, dan fungsi paginasi, tanpa perlu menulis logikanya berulang kali.
- **Pragmatisme:** `ListUser.jsx` sengaja tidak diubah karena memiliki logika fetching yang unik (menggabungkan data dari dua endpoint API). Memaksanya menggunakan hook generik akan membuat hook tersebut menjadi terlalu kompleks. Ini adalah keputusan pragmatis untuk menjaga agar hook tetap sederhana dan fokus pada kasus penggunaan yang paling umum.
