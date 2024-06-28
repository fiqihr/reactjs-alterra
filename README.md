# React JS Alterra

Repository ini merupakan hasil dari tugas saya dalam kelas React JS Alterra Academy.
Ini merupakan halaman website portofolio sederhana yang menampilkan beberapa menu antara lain:
- Home
- CV
- My Project
- Contact Me
- Todo List

Dalam project ini saya menerapkan penggunaan react js sederhana, yaitu membagi komponen menjadi beberapa bagian dan kemudian bisa dipanggil di kelas yang lain.

Di halaman Todo List, merupakan halaman tambahan sesuai perintah di tugas, yang mana user akan menginputkan 3 form yang berisi nama, deskripsi, deadline.

Proses penyimpanan data dari halaman Todo List bersifat static dan disimpan di localStorage.

Cara kerja sederhana dari localStorage yang saya gunakan adalah sebagai berikut:

- Setiap kali ada perubahan pada state tasks (penambahan atau penghapusan task), yang dipanggil adalah localStorage.setItem('tasks', JSON.stringify(this.state.tasks)) untuk menyimpan data tasks ke localStorage.
- Pada constructor, proses membaca data dari localStorage dengan menggunakan localStorage.getItem('tasks').
- Lalu menggunakan JSON.parse() untuk mengubah string JSON dari localStorage menjadi array JavaScript.
- Jika tidak ada data tasks di localStorage, maka akan menginisialisasi tasks dengan array kosong.

Beberapa fitur baru yang ditambahkan yaitu :
- Alert("Selamat Datang") akan dipanggil saat komponen pertama kali dirender dan juga alert("Sampai Jumpa") yang akan dipanggil saat komponen dilepas, yang terjadi ketika menutup tab browser atau menavigasi pergi dari halaman yang merupakan fungsi pembersihan.
- Dihalaman Todo List muncul jumlah tasks yang dibuat dan jumlah tasks yang dihapus.

Berikut merupakan preview dari website ini.

![Preview Website](https://github.com/fiqihr/reactjs-alterra/assets/75562356/76047406-4ec1-4e18-883d-71b475397b9b)



