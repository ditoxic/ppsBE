const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 3000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Custom middleware function for logging
app.use((req, res, next) => {
  console.log(`Menerima request ${req.method} terhadap ${req.path}`);
  next(); // Move to the next middleware or route handler
});

// ============= read data / get data
// coba di postman --> (get)
app.get('/barang', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM ppbs_barang';
    console.log('Ini GET' );

    // jalankan query
    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        // jika request berhasil
        res.status(200).json({ success: true, data: rows });
    });
});


// ========= get one record data
// coba di postman --> (get)
app.get('/barang/:brg_id', (req, res) => {
    // buat query sql
    const querySql = 'SELECT * FROM ppbs_barang WHERE brg_id = ?';
    console.log(`Request id = ${req.params.brg_id}`);
  
    // jalankan query
    koneksi.query(querySql, [req.params.brg_id], (err, rows, field) => {
      // error handling
      if (err) {
        return res.status(500).json({ message: 'Ada kesalahan', error: err });
      }
  
      // jika request berhasil
      res.status(200).json({ success: true, data: rows });
    });
  });
// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  });
// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
