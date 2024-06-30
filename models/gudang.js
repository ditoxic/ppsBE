// const express = require('express');
// const bodyParser = require('body-parser');
// const koneksi = require('./config/database');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const cors = require('cors');

// //app.use(cors());

// // set body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Custom middleware function for logging
// app.use((req, res, next) => {
//   console.log(`Menerima request ${req.method} terhadap ${req.path}`);
//   next(); // Move to the next middleware or route handler
// });

// // ============= create data / insert data
// // coba di postman --> (post, x-www-urlencoded)
// app.post('/gudang', (req, res) => {

//     console.log('datanya', req.body);
//     // buat variabel penampung data dan query sql
//     const data = { ...req.body };
//     const querySql = 'INSERT INTO ppbs_stokgudang SET ?';
//     console.log('coba create /input baru');
//     console.log('datanya=', req.body);

//     // jalankan query insert
//     koneksi.query(querySql, data, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Gagal insert data stok!', error: err });
//         }

        
//         // jika request berhasil, update loc_weiutil di ppbs_lokasi
//         const gdgWeight = data.gdg_weight;
//         const gdgLocation = data.gdg_Lokasi;
//         const updateQuery = 'UPDATE ppbs_lokasi SET loc_weiutil = loc_weiutil - ? WHERE loc_ID = ?';



//         // jalankan query update
//         koneksi.query(updateQuery, [gdgWeight, gdgLocation], (updateErr, updateResult) => {
//             if (updateErr) {
//                 return res.status(500).json({ message: 'Gagal update loc_weiutil!', error: updateErr });
//             }

//             // jika update berhasil
//             res.status(201).json({ success: true, message: 'Berhasil insert data stok dan update loc_weiutil!' });
//         });
//     });
// });


// // ============= read data / get data
// // coba di postman --> (get)
// app.get('/gudang', (req, res) => {
//     // buat query sql
//     const querySql = 'SELECT * FROM ppbs_stokgudang';
//     const queryBarang = 'SELECT * FROM barang WHERE id = ...';
//     console.log('Ini GET' );

//     // jalankan query
//     koneksi.query(querySql, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         // jika request berhasil
//         res.status(200).json({ success: true, data: rows });
//     });
// });


// // ========= get one record data
// // coba di postman --> (get)
// app.get('/gudang/:gdg_ID', (req, res) => {
//     // buat query sql
//     const querySql = `SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ${req.params.gdg_ID}`;
//     console.log(`Request ID = ${req.params.gdg_ID}`) 
   

//     // jalankan query
//     koneksi.query(querySql, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         // jika request berhasil
//         res.status(200).json({ success: true, data: rows });
//     });
// });


// // update data 
// // coba di postman --> (put, body)
// app.put('/gudang/:gdg_ID', (req, res) => {
//     // buat variabel penampung data dan query sql
//     const data = { ...req.body };
//     const querySearch = 'SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?';
//     const queryUpdate = 'UPDATE ppbs_stokgudang SET ? WHERE gdg_ID = ?';
//     console.log(`Request query update = ${queryUpdate}`)

    
//     //validasi karakter bansos kelebihan
//     if (data.gdg_NamaBansos.length > 100 ){
//         return res.status(400).json({message: 'Nama bansos melebihi 100 karakter'})
//     } else if (data.gdg_NamaBansos.length == "" ){
//         return res.status(400).json({message: 'Nama bansos harus diisi'})
//     }

//     //validasi jenis bansos
//     if (data.gdg_JenisBansos != "Beras" && data.gdg_JenisBansos != "Non-Beras" ){
//         return res.status(400).json({message: 'Jenis tidak sesuai'})
//     }

//     // jalankan query untuk melakukan pencarian data
//     koneksi.query(querySearch, req.params.gdg_ID, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         // jika id yang dimasukkan sesuai dengan data yang ada di db
//         if (rows.length) {
//             // jalankan query update
//             koneksi.query(queryUpdate, [data, req.params.gdg_ID], (err, rows, field) => {
//                 // error handling
//                 if (err) {
//                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
//                 }

//                 // jika update berhasil
//                 res.status(200).json({ success: true, message: 'Berhasil update data stok!' });
//             });
//         } else {
//             return res.status(404).json({ message: 'Data stok tidak ditemukan!', success: false });
//         }
//     });
// });


// // delete data
// // coba di postman --> (delete)
// app.delete('/gudang/:gdg_ID', (req, res) => {
//     // buat query sql untuk mencari data dan hapus
//     const querySearch = 'SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?';
//     const queryDelete = 'DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?';

//     // jalankan query untuk melakukan pencarian data
//     koneksi.query(querySearch, req.params.gdg_ID, (err, rows, field) => {
//         // error handling
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         // jika id yang dimasukkan sesuai dengan data yang ada di db
//         if (rows.length) {
//             // jalankan query delete
//             koneksi.query(queryDelete, req.params.gdg_ID, (err, rows, field) => {
//                 // error handling
//                 if (err) {
//                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
//                 }

//                 // jika delete berhasil
//                 res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
//             });
//         } else {
//             return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
//         }
//     });
// });


// // buat server nya
// app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

