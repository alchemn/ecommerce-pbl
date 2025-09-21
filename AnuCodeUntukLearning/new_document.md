# Dokumentasi Frontend

Selamat datang di dokumentasi frontend! Dokumen ini akan membantu Anda memahami beberapa konsep kunci yang digunakan dalam proyek ini, bahkan jika Anda tidak memiliki latar belakang pemrograman.

## Apa itu `useLocation`?

Bayangkan Anda sedang berada di sebuah pusat perbelanjaan besar. Anda ingin tahu di lantai berapa Anda sekarang, di toko mana Anda berada, dan mungkin Anda baru saja datang dari toko lain yang memberikan Anda kupon diskon.

Di dunia web, `useLocation` adalah seperti "GPS internal" untuk aplikasi Anda. Ini memberi tahu Anda informasi tentang halaman (URL) yang sedang Anda lihat.

### Mengapa Kita Menggunakannya?

Di aplikasi kita, kita menggunakan `useLocation` di halaman `Login` untuk memeriksa apakah Anda baru saja mendaftar.

*   **Analogi:** Anggap saja setelah Anda mendaftar di "Toko A" (halaman Register), mereka memberi Anda stiker khusus. Ketika Anda berjalan ke "Toko B" (halaman Login), penjaga di pintu melihat stiker Anda dan berkata, "Selamat datang! Terima kasih telah mendaftar di Toko A."

`useLocation` memungkinkan halaman `Login` untuk "melihat" bahwa Anda baru saja datang dari halaman `Register` (dengan memeriksa "stiker" atau `?registered=true` di URL) dan kemudian menampilkan pesan "Pendaftaran berhasil!".

### Bagaimana Cara Kerjanya?

`useLocation` adalah sebuah "Hook" dari `react-router-dom`, sebuah pustaka yang membantu kita menavigasi antar halaman. Ketika dipanggil, ia mengembalikan objek "lokasi" yang berisi informasi seperti:

*   `pathname`: Alamat halaman saat ini (misalnya, `/login`).
*   `search`: Bagian "query" dari URL, yang dimulai dengan `?` (misalnya, `?registered=true`).

Kita kemudian dapat membaca `search` untuk melihat apakah ada informasi tambahan yang dikirimkan dari halaman sebelumnya.

## Apa itu "Props"?

Bayangkan Anda memesan sebuah pizza. Anda dapat menyesuaikan pesanan Anda dengan berbagai "pilihan" (props), seperti:

*   Ukuran: "Besar"
*   Topping: "Keju", "Peperoni"
*   Saus: "Tomat"

Di React (kerangka kerja yang kita gunakan), "props" (kependekan dari "properties") adalah cara kita memberikan "pilihan" atau data kustom ke sebuah komponen. Komponen adalah seperti "cetakan" untuk bagian-bagian dari antarmuka pengguna kita (seperti tombol, kartu, dll.).

Dengan props, kita dapat menggunakan kembali komponen yang sama di banyak tempat tetapi dengan data yang berbeda.

### Analogi Props

*   **Komponen `Button`:** Anggap `Button` sebagai cetakan untuk membuat tombol. Props-nya adalah:
    *   `children`: Teks yang muncul di dalam tombol (misalnya, "Login", "Daftar").
    *   `onClick`: Apa yang terjadi ketika tombol diklik.
    *   `disabled`: Apakah tombol bisa diklik atau tidak.
*   **Komponen `Card`:** Anggap `Card` sebagai bingkai foto. Props-nya adalah:
    *   `image`: Gambar yang akan ditampilkan.
    *   `name`: Nama produk.
    *   `price`: Harga produk.

Dengan cara ini, kita bisa memiliki banyak kartu produk di halaman kita, masing-masing dengan gambar, nama, dan harga yang berbeda, tetapi semuanya terlihat konsisten karena mereka menggunakan "bingkai" (komponen `Card`) yang sama.

### Rincian Props untuk Setiap Komponen

Berikut adalah rincian props untuk setiap komponen di `src/components`:

*   **`Button.jsx`**
    *   `children`: Konten di dalam tombol (biasanya teks).
    *   `onClick`: Fungsi yang akan dijalankan saat tombol diklik.
    *   `type`: Jenis tombol (misalnya, `"button"`, `"submit"`).
    *   `disabled`: Jika `true`, tombol tidak akan bisa diklik.
    *   `className`: Untuk menambahkan gaya CSS tambahan.

*   **`Card.jsx` & `CardBig.jsx`**
    *   `id`: ID unik untuk produk, digunakan untuk membuat tautan ke halaman detail produk.
    *   `name`: Nama produk.
    *   `price`: Harga produk.
    *   `image`: URL gambar produk.
    *   `owner`: (Hanya di `CardBig.jsx`) Nama penjual atau pemilik produk.

*   **`Category.jsx`**
    *   `name`: Nama kategori.
    *   `image`: URL gambar kategori.

*   **`CategoryList.jsx`**
    *   Komponen ini tidak menerima props. Ia mengambil datanya sendiri dari API.

*   **`CheckoutSkeleton.jsx`, `Footer.jsx`, `HeaderAddProduct.jsx`, `Hero.jsx`, `Navbar.jsx`, `NavLinks.jsx`, `Pagination.jsx`, `PaymentDetails.jsx`, `ProductFilters.jsx`, `SearchBar.jsx`, `SideBarAddProduct.jsx`, `Spinner.jsx`, `UserActions.jsx`**
    *   Komponen-komponen ini tidak menerima props. Mereka adalah komponen statis yang menampilkan konten yang sama setiap saat.

*   **`InputField.jsx`**
    *   `label`: Teks label untuk bidang input.
    *   `type`: Jenis input (misalnya, `"text"`, `"email"`, `"password"`).
    *   `value`: Nilai saat ini dari bidang input.
    *   `onChange`: Fungsi yang akan dijalankan saat nilai input berubah.
    *   `placeholder`: Teks placeholder yang muncul saat bidang input kosong.
    *   `children`: Untuk menyisipkan elemen lain di dalam bidang input (seperti ikon mata untuk menampilkan/menyembunyikan kata sandi).

*   **`OrderSummary.jsx`**
    *   `order`: Objek yang berisi detail pesanan, termasuk produk yang dibeli.

*   **`ProductGrid.jsx`**
    *   Komponen ini tidak menerima props. Ia mengambil datanya sendiri dari API.

*   **`ProductImage.jsx`**
    *   `image`: URL gambar produk.
    *   `name`: Nama produk (digunakan untuk teks `alt` gambar).

*   **`ProductInfo.jsx`**
    *   `product`: Objek yang berisi detail produk.
    *   `isBuying`: `true` jika proses pembelian sedang berlangsung (untuk menonaktifkan tombol).
    *   `handleBuyNow`: Fungsi yang akan dijalankan saat tombol "Buy Now" diklik.
    *   `error`: Pesan kesalahan untuk ditampilkan jika terjadi masalah.

*   **`ProductSection.jsx`**
    *   Komponen ini tidak menerima props. Ia mengambil datanya sendiri dari API.

*   **`Promo.jsx`**
    *   `bgColor`: Warna latar belakang untuk kartu promo.
    *   `icon`: Ikon untuk ditampilkan.
    *   `title`: Judul promo.
    *   `description`: Deskripsi promo.
    *   `buttonText`: Teks untuk tombol.
    *   `buttonBgColor`: Warna latar belakang untuk tombol.
    *   `buttonHoverColor`: Warna latar belakang tombol saat di-hover.
    *   `buttonRingColor`: Warna cincin fokus untuk tombol.

*   **`ShippingDetails.jsx`**
    *   `user`: Objek yang berisi informasi pengguna, termasuk alamat pengiriman.

## Apa itu `payload` di `api/index.js`?

Di file `api/index.js`, Anda akan melihat parameter yang disebut `payload` di beberapa fungsi, seperti `createUser` dan `loginUser`.

Bayangkan Anda mengirim paket ke teman. Anda tidak bisa hanya mengirim kotak kosong. Anda harus memasukkan sesuatu ke dalamnya. "Sesuatu" itu adalah `payload`.

*   **Analogi:** Saat Anda mendaftar atau masuk, Anda mengisi formulir dengan email dan kata sandi Anda. Informasi ini (email dan kata sandi) dikemas bersama ke dalam sebuah "paket" yang disebut `payload`. Paket ini kemudian dikirim ke server (backend) untuk diproses.

Jadi, `payload` hanyalah nama umum untuk data yang Anda kirim ke server. Dalam kasus fungsi `createUser` dan `loginUser`, `payload` berisi objek dengan email dan kata sandi pengguna:

```javascript
const userData = { email, password };
const response = await createUser(userData); // userData di sini adalah payload
```
