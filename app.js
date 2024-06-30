const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const koneksi = require("./config/database");
const gudangRoutes = require("./routes/gudangRoutes");
const barangRoutes = require("./routes/barangRoutes");
const lokasiRoutes = require("./routes/lokasiRoutes");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.path}`);
  next();
});

// app.use("/barang", barangRoutes);
console.log(gudangRoutes, "ini error");
app.use("/gudang", gudangRoutes);
app.use("/lokasi", lokasiRoutes);

app.get("/", (req, res) => {
  res.redirect("/gudang");
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

module.exports = app;
