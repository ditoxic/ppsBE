// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// // const koneksi = require('./config/database');
// const lokasiRoutes = require("./routes/lokasiRoutes");
// // const barangRoutes = require('./routes/barangRoutes');
// const gudangRoutes = require("./routes/gudangRoutes");
// const lokasi = express();
// const PORT = process.env.PORT || 8000;

// lokasi.use(cors());
// lokasi.use(bodyParser.json());
// lokasi.use(bodyParser.urlencoded({ extended: false }));

// lokasi.use((req, res, next) => {
//   console.log(`Received ${req.method} request to ${req.path}`);
//   next();
// });

// lokasi.use("/lokasi", lokasiRoutes);
// lokasi.use("/gudang", gudangRoutes);

// app.get("/", (req, res) => {
//   res.redirect("/lokasi");
// });

// lokasi.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

// module.exports = lokasi;
