const express = require("express");
const router = express.Router();
const koneksi = require("../config/database");
const lokasiController = require("../controllers/lokasiController");
const lokasi = require("../lokasi");

// ============= create data / insert data
// router.post("/", (req, res) => {
//   console.log("datanya", req.body);
//   const data = { ...req.body };
//   const querySql = "INSERT INTO ppbs_lokasi SET ?";
//   console.log("coba create /input baru");
//   console.log("datanya=", req.body);

//   koneksi.query(querySql, data, (err, rows, field) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Gagal insert data stok!", error: err });
//     }
//   });
// });

// ============= read data / get data
// router.get('/', (req, res) => {
//     const querySql = 'SELECT * FROM ppbs_lokasi';
//     console.log('Ini GET');

//     koneksi.query(querySql, (err, rows, field) => {
//         if (err) {
//             return res.status(500).json({ message: 'Ada kesalahan', error: err });
//         }

//         res.status(200).json({ success: true, data: rows });
//     });
// });
router.get("/", lokasiController.getLokasi);
router.get("/:loc_ID", lokasiController.getLokasiById);

// ========= get one record data
// router.get("/:loc_ID", (req, res) => {
//   const querySql = `SELECT * FROM ppbs_lokasi WHERE loc_ID = ${req.params.loc_ID}`;
//   console.log(`Request ID = ${req.params.loc_ID}`);

//   koneksi.query(querySql, (err, rows, field) => {
//     if (err) {
//       return res.status(500).json({ message: "Ada kesalahan", error: err });
//     }

//     res.status(200).json({ success: true, data: rows });
//   });
// });

// update data
// router.put("/:loc_ID", (req, res) => {
//   const data = { ...req.body };
//   const querySearch = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
//   const queryUpdate = "UPDATE ppbs_lokasi SET ? WHERE loc_ID = ?";
//   console.log(`Request query update = ${queryUpdate}`);

//   koneksi.query(querySearch, req.params.loc_ID, (err, rows, field) => {
//     if (err) {
//       return res.status(500).json({ message: "Ada kesalahan", error: err });
//     }

//     if (rows.length) {
//       koneksi.query(
//         queryUpdate,
//         [data, req.params.loc_ID],
//         (err, rows, field) => {
//           if (err) {
//             return res
//               .status(500)
//               .json({ message: "Ada kesalahan", error: err });
//           }

//           res
//             .status(200)
//             .json({ success: true, message: "Berhasil update data lokasi!" });
//         }
//       );
//     } else {
//       return res
//         .status(404)
//         .json({ message: "Data lokasi tidak ditemukan!", success: false });
//     }
//   });
// });

// delete data
// router.delete("/:loc_ID", (req, res) => {
//   const querySearch = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
//   const queryDelete = "DELETE FROM ppbs_lokasi WHERE loc_ID = ?";

//   koneksi.query(querySearch, req.params.loc_ID, (err, rows, field) => {
//     if (err) {
//       return res.status(500).json({ message: "Ada kesalahan", error: err });
//     }

//     if (rows.length) {
//       koneksi.query(queryDelete, req.params.loc_ID, (err, rows, field) => {
//         if (err) {
//           return res.status(500).json({ message: "Ada kesalahan", error: err });
//         }

//         res
//           .status(200)
//           .json({ success: true, message: "Berhasil hapus data!" });
//       });
//     } else {
//       return res
//         .status(404)
//         .json({ message: "Data tidak ditemukan!", success: false });
//     }
//   });
// });

module.exports = router;
