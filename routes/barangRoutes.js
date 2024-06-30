const express = require('express');
const router = express.Router();
const koneksi = require('../config/database');

// // ============= create data / insert data
// router.post('/', (req, res) => {
//     console.log('datanya', req.body);
//     const data = { ...req.body };
//     const querySql = 'INSERT INTO ppbs_stokgudang SET ?';
//     console.log('coba create /input baru');
//     console.log('datanya=', req.body);

//     koneksi.query(querySql, data, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Gagal insert data stok!', error: err });
//         }

//         const gdgWeight = data.gdg_weight;
//         const gdgLocation = data.gdg_Lokasi;
//         const updateQuery = 'UPDATE ppbs_lokasi SET loc_weiutil = loc_weiutil - ? WHERE loc_ID = ?';

//         koneksi.query(updateQuery, [gdgWeight, gdgLocation], (updateErr, updateResult) => {
//             if (updateErr) {
//                 return res.status(500).json({ message: 'Gagal update loc_weiutil!', error: updateErr });
//             }

//             res.status(201).json({ success: true, message: 'Berhasil insert data stok dan update loc_weiutil!' });
//         });
//     });
// });

// ============= read data / get data
router.get('/', (req, res) => {
    const querySql = 'SELECT * FROM ppbs_barang';
    console.log('Ini GET');

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

// ========= get one record data
router.get('/:brg_id', (req, res) => {
    const querySql = `SELECT * FROM ppbs_barang WHERE brg_id = ${req.params.brg_id}`;
    console.log(`Request ID = ${req.params.brg_id}`);

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

// // update data
// router.put('/:gdg_ID', (req, res) => {
//     const data = { ...req.body };
//     const querySearch = 'SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?';
//     const queryUpdate = 'UPDATE ppbs_stokgudang SET ? WHERE gdg_ID = ?';
//     console.log(`Request query update = ${queryUpdate}`);

//     if (data.gdg_NamaBansos.length > 100) {
//         return res.status(400).json({ message: 'Nama bansos melebihi 100 karakter' });
//     } else if (data.gdg_NamaBansos.length == "") {
//         return res.status(400).json({ message: 'Nama bansos harus diisi' });
//     }

//     if (data.gdg_JenisBansos != "Beras" && data.gdg_JenisBansos != "Non-Beras") {
//         return res.status(400).json({ message: 'Jenis tidak sesuai' });
//     }

//     koneksi.query(querySearch, req.params.gdg_ID, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         if (rows.length) {
//             koneksi.query(queryUpdate, [data, req.params.gdg_ID], (err, rows, field) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
//                 }

//                 res.status(200).json({ success: true, message: 'Berhasil update data stok!' });
//             });
//         } else {
//             return res.status(404).json({ message: 'Data stok tidak ditemukan!', success: false });
//         }
//     });
// });

// // delete data
// router.delete('/:gdg_ID', (req, res) => {
//     const querySearch = 'SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?';
//     const queryDelete = 'DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?';

//     koneksi.query(querySearch, req.params.gdg_ID, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         if (rows.length) {
//             koneksi.query(queryDelete, req.params.gdg_ID, (err, rows, field) => {
//                 if (err) {
//                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
//                 }

//                 res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
//             });
//         } else {
//             return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
//         }
//     });
// });

module.exports = router;
