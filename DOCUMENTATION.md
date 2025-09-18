# Dokumentasi Proyek Frontend

Selamat datang di dokumentasi proyek! Dokumen ini akan menjelaskan perubahan besar yang telah dilakukan, struktur komponen baru, dan bagaimana cara kerja sistem API kita. Tujuannya adalah agar mudah dipahami, bahkan untuk kamu yang baru mulai belajar.

## 1. Pemindahan Konfigurasi API ke `.env`

Untuk alasan keamanan dan kemudahan pengelolaan, URL utama (base URL) untuk panggilan API telah dipindahkan dari dalam kode ke sebuah file khusus.

- **File Baru**: `.env`
- **Lokasi**: Di folder utama proyek.

**Isi File `.env`:**
```
VITE_API_URL=http://172.16.10.24:9009
```

**Kenapa ini penting?**
- **Keamanan**: Memisahkan konfigurasi dari kode sumber. File `.env` biasanya tidak akan kamu unggah ke repositori (seperti GitHub), sehingga jika ada informasi sensitif, itu tidak akan bocor.
- **Fleksibilitas**: Kamu bisa dengan mudah mengganti URL API untuk lingkungan yang berbeda (misalnya, development, testing, production) tanpa harus mengubah kode.

File `.gitignore` juga telah diperbarui untuk memastikan file `.env` tidak ikut ter-commit.

---

## 2. Pusat Panggilan API (`src/api/index.js`)

Semua fungsi yang berhubungan dengan panggilan ke server (API) sekarang dikumpulkan dalam satu file. Ini membuat kode di komponen menjadi lebih bersih dan fokus pada tampilan.

**Lokasi File**: `src/api/index.js`

### Fungsi yang Tersedia:

- `getProductById(id)`: Mengambil data satu produk berdasarkan ID-nya.
- `createOrder(payload)`: Membuat pesanan baru.
- `getOrderById(id)`: Mengambil detail pesanan berdasarkan ID.
- `getCategories()`: Mengambil semua daftar kategori.
- `getLatestProducts()`: Mengambil produk-produk terbaru.
- `getAllProducts()`: Mengambil semua produk.

**Contoh Kode `apiClient`:**
```javascript
import axios from "axios";

// Mengambil URL API dari file .env
const baseURL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL,
});

// ... sisa fungsi lainnya
```

**Cara Menggunakannya di Komponen:**
Kamu cukup mengimpor fungsi yang kamu butuhkan dan memanggilnya.

```javascript
import { getProductById } from '../api';

// ... di dalam komponen
const response = await getProductById(1);
```

---

## 3. Pemecahan Komponen (Component Slicing)

Beberapa halaman yang tadinya merupakan satu file besar kini telah dipecah menjadi komponen-komponen yang lebih kecil. Ini membuat kode lebih mudah dibaca, diuji, dan digunakan kembali.

### A. Perubahan pada Halaman `ProductDetail`

Halaman ini dipecah menjadi:

- **`ProductImage.jsx`**: Hanya untuk menampilkan gambar produk.
  - **Props**: `image` (URL gambar), `name` (nama produk untuk atribut `alt`).
  ```jsx
  <ProductImage image={product.image} name={product.name} />
  ```

- **`ProductInfo.jsx`**: Menampilkan semua informasi teks (nama, deskripsi, harga) dan tombol aksi.
  - **Props**: `product` (objek produk), `isBuying` (status loading), `handleBuyNow` (fungsi untuk tombol beli), `error` (pesan error).
  ```jsx
  <ProductInfo product={product} isBuying={isBuying} handleBuyNow={handleBuyNow} error={error} />
  ```

- **`Spinner.jsx`**: Komponen baru untuk ikon putar yang menandakan proses *loading*. Digunakan di dalam `ProductInfo.jsx`.

### B. Perubahan pada Halaman `Checkout`

Halaman ini dipecah menjadi:

- **`CheckoutSkeleton.jsx`**: Komponen baru untuk tampilan *skeleton loading* saat data pesanan sedang diambil. Memberikan pengalaman pengguna yang lebih baik daripada tulisan "Loading...".

- **`ShippingDetails.jsx`**: Menampilkan alamat pengiriman.
  - **Props**: `user` (objek pengguna yang berisi profil).
  ```jsx
  <ShippingDetails user={order.user} />
  ```

- **`PaymentDetails.jsx`**: Menampilkan metode pembayaran (saat ini masih statis).
  - **Props**: Tidak ada.

- **`OrderSummary.jsx`**: Menampilkan ringkasan pesanan dan total biaya.
  - **Props**: `order` (objek pesanan).
  ```jsx
  <OrderSummary order={order} />
  ```

### C. Perubahan pada Halaman `Dashboard`

Halaman ini dipecah menjadi:

- **`Hero.jsx`**: Komponen untuk bagian paling atas halaman (gambar besar dan teks promosi utama).
- **`CategoryList.jsx`**: Mengambil dan menampilkan daftar kategori produk.
- **`ProductSection.jsx`**: Mengambil dan menampilkan daftar produk terbaru.
- **`Promo.jsx`**: Komponen serbaguna untuk kotak promosi ("Free Shipping" dan "Get $10 Off").
  - **Props**: Menerima banyak properti untuk kustomisasi seperti `bgColor`, `icon`, `title`, `description`, `buttonText`, dll. Ini contoh yang bagus untuk komponen yang bisa digunakan kembali.
  ```jsx
  <Promo
    bgColor="bg-indigo-100"
    icon={<TruckIcon width={50} />}
    title="Free Shipping..."
    // ...props lainnya
  />
  ```

### D. Perubahan pada Halaman `ProductList`

Halaman ini dipecah menjadi:

- **`ProductFilters.jsx`**: *Sidebar* untuk filter produk (saat ini masih placeholder).
- **`ProductGrid.jsx`**: Mengambil dan menampilkan semua produk dalam format grid.
- **`Pagination.jsx`**: Komponen untuk navigasi halaman (saat ini masih dummy/statis).

### E. Perubahan pada Komponen `Navbar`

Navbar juga dipecah agar lebih terstruktur:

- **`NavLinks.jsx`**: Berisi link navigasi utama (Home, Shop, About).
- **`SearchBar.jsx`**: Komponen untuk kotak pencarian.
- **`UserActions.jsx`**: Berisi ikon untuk keranjang belanja dan profil pengguna.

Semoga dokumentasi ini membantu kamu memahami struktur baru proyek kita. Selamat melanjutkan ngoding!