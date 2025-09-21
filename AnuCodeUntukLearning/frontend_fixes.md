# Dokumentasi Frontend: Dari Catatan Tempel ke Kunci Ajaib!

Hai! Kali ini kita akan merapikan kode di bagian frontend. Bayangkan kode kita yang lama itu seperti rumah yang penuh dengan catatan tempel (sticky notes).

## Kode yang Lama (Rumah Penuh Catatan Tempel)

Sebelumnya, kita menyimpan "kunci" atau `userId` di banyak tempat dan dengan cara yang kurang aman.

**Contoh 1: `userId` ditulis di mana-mana**

Di file seperti `AddProduct.jsx` atau `EditProduct.jsx`, kita menulis `userId` langsung di dalam kode.

```javascript
// Di dalam AddProduct.jsx
<input
  type="hidden"
  name="userId"
  value="1" // <-- Seperti menulis password di tembok!
/>

// Di dalam EditProduct.jsx
formData.append("userId", 1); // <-- Menulis password lagi di tempat lain!
```

**Contoh 2: `fetch` yang bekerja sendiri**

Di `api/index.js`, ada satu fungsi yang tidak ikut aturan. Yang lain pakai `apiClient` (yang otomatis bawa tiket), tapi dia pakai `fetch` dan lupa bawa tiket.

```javascript
// Fungsi ini tidak bawa tiket (token)
export const getOrderById = (id) => {
  return fetch(`${baseURL}/order/${id}`);
};
```

### Kenapa ini berantakan?

Ini seperti menempelkan password di seluruh rumah. Kalau password-nya ganti, kita harus lari keliling rumah untuk mengganti semua catatan tempel itu. Repot dan tidak aman!

## Kode yang Baru (Memakai Kunci Ajaib)

Sekarang, kita punya satu **Kunci Ajaib** (JWT Token) dan satu **Ahli Kunci** (`getUser`).

**1. Ahli Kunci (`getUser`)**

Kita membuat file `src/utils/auth.js` yang punya fungsi `getUser`. Tugasnya adalah membaca Kunci Ajaib dan memberi tahu kita siapa pemiliknya.

```javascript
// src/utils/auth.js
import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const token = localStorage.getItem("token"); // Ambil Kunci Ajaib
  if (token) {
    return jwtDecode(token); // Baca kuncinya
  }
  return null; // Tidak ada kunci
};
```

**2. Semua Pakai `getUser`**

Sekarang, semua file yang butuh `userId` tinggal panggil si Ahli Kunci.

```javascript
// Di dalam AddProduct.jsx
const user = getUser(); // Panggil Ahli Kunci
formData.append("userId", user.id); // Pakai info dari Ahli Kunci
```

**3. Semua Pakai `apiClient`**

Fungsi yang tadi nakal sekarang sudah ikut aturan. Dia pakai `apiClient` juga, jadi tiketnya (token) tidak akan pernah lupa dibawa.

```javascript
// api/index.js
export const getOrderById = (id) => {
  return apiClient.get(`/order/${id}`); // <-- Sekarang ikut aturan!
};
```

### Kenapa ini hebat?

Sekarang kita hanya punya satu Kunci Ajaib yang disimpan di satu tempat aman (`localStorage`). Kalau kita butuh tahu siapa pemiliknya, kita tinggal panggil si Ahli Kunci. Jauh lebih aman, rapi, dan mudah!
