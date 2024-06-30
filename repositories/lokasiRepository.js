const koneksi = require("../config/database");

// exports.getLokasi = () => {
//   return new Promise((resolve, reject) => {
//     const query = "SELECT * FROM ppbs_lokasi";
//     koneksi.query(query, (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const getLokasi = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_lokasi";
    koneksi.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.getLokasiByID = (loc_ID) => {
//   return new Promise((resolve, reject) => {
//     const query = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
//     koneksi.query(query, [loc_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const getLokasiById = async (loc_ID) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
    koneksi.query(query, [loc_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.getLokasiUtil = (loc_ID) => {
//   return new Promise((resolve, reject) => {
//     const query = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
//     koneksi.query(query, [loc_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const getLokasiUtil = (loc_ID) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_lokasi WHERE loc_ID = ?";
    koneksi.query(query, [loc_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.updateLokasi = (loc_ID, data) => {
//   return new Promise((resolve, reject) => {
//     const query = "UPDATE ppbs_lokasi SET ? WHERE loc_ID = ?";
//     koneksi.query(query, [data, loc_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const updateLokasi = (loc_ID, data) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE ppbs_lokasi SET ? WHERE loc_ID = ?";
    koneksi.query(query, [data, loc_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.deleteLokasi = (loc_ID) => {
//   return new Promise((resolve, reject) => {
//     const query = "DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?";
//     koneksi.query(query, [loc_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const deleteLokasi = async (loc_ID) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?";
    koneksi.query(query, [loc_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = {
  getLokasi,
  getLokasiById,
  getLokasiUtil,
  updateLokasi,
  deleteLokasi,
};
