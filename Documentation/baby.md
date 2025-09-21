# Dokumentasi Super Sederhana: Kenapa Pesananku Tidak Muncul?

Bayangkan kita punya sebuah taman bermain yang besar! playground.

## Kode yang Salah (Kode Nakal)

```javascript
orderRouter.get('/', authMiddleware, roleMiddleware, getOrder)
```

### Kenapa ini nakal?

Bayangkan di taman bermain kita, ada perosotan khusus untuk orang dewasa. Nah, `roleMiddleware` itu seperti penjaga gerbang perosotan itu. Dia tugasnya memastikan hanya orang dewasa yang boleh main.

Masalahnya, penjaga gerbang ini salah tempat! Dia malah menjaga ayunan biasa, tempat semua anak (pengguna biasa) seharusnya boleh bermain. Jadi, setiap kali ada anak yang mau main ayunan, penjaga gerbangnya malah bertanya, "Apakah kamu orang dewasa?" Tentu saja anak-anak jadi tidak boleh main.

## Kode yang Benar (Kode Baik)

```javascript
orderRouter.get('/', authMiddleware, getOrder)
```

### Kenapa ini baik?

Di sini, kita sudah memindahkan penjaga gerbang (`roleMiddleware`) kembali ke tempatnya yang benar, yaitu di perosotan khusus orang dewasa (misalnya, halaman admin).

Sekarang, ayunan (`getOrder`) hanya dijaga oleh `authMiddleware`, yaitu penjaga gerbang utama taman bermain. Selama kamu punya tiket masuk (sudah login), kamu boleh langsung main ayunan dan melihat semua pesananmu.

## Kesimpulan

Kita hanya perlu memastikan setiap penjaga gerbang berada di tempat yang tepat, agar semua orang bisa bermain dengan gembira sesuai aturannya! Hore!