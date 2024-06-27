# React JS Alterra

Repository ini merupakan hasil dari tugas saya dalam kelas React JS Alterra Academy.
Ini merupakan halaman website portofolio sederhana yang menampilkan beberapa menu antara lain:
- Home
- CV
- My Project
- Contact Me
- Todo List

Dalam project ini saya menerapkan penggunaan react js sederhana, yaitu membagi komponen menjadi beberapa bagian dan kemudian bisa dipanggil di kelas yang lain.
Disini saya menggunakan bootstrap untuk proses desain User Interface

Di halaman Todo List, merupakan halaman tambahan sesuai perintah di tugas, yang mana user akan menginputkan 3 form yang berisi nama, deskripsi, dan deadline.

Proses penyimpanan data dari halaman Todo List bersifat static dan disimpan di localStorage.

Cara kerja sederhana dari localStorage yang saya gunakan di Todo List adalah sebagai berikut:

- Setiap kali ada perubahan pada state tasks (penambahan atau penghapusan task), yang dipanggil adalah localStorage.setItem('tasks', JSON.stringify(this.state.tasks)) untuk menyimpan data tasks ke localStorage.
- Pada constructor, proses membaca data dari localStorage dengan menggunakan localStorage.getItem('tasks').
- Lalu menggunakan JSON.parse() untuk mengubah string JSON dari localStorage menjadi array JavaScript.
- Jika tidak ada data tasks di localStorage, maka akan menginisialisasi tasks dengan array kosong.

Berikut merupakan preview dari website ini.

![My Portfolio](https://github.com/fiqihr/reactjs-alterra/assets/75562356/6c4b02a9-f596-4e8e-b33c-93b6bd3059c1)


