const koneksi = require("../config/database");

// exports.createGudang = (data) => {
//   return new Promise((resolve, reject) => {
//     const query = "INSERT INTO ppbs_stokgudang SET ?";
//     koneksi.query(query, data, (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const createGudang = async (data) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO ppbs_stokgudang SET ?";
    koneksi.query(query, data, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};
// exports.getAllGudang = () => {
//     return new Promise((resolve, reject) => {
//         const query = 'SELECT * FROM ppbs_stokgudang';
//         koneksi.query(query, (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             resolve(results);
//         });
//     });
// };

const getAllGudang = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_stokgudang";
    koneksi.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.getGudangById = (gdg_ID) => {
//   return new Promise((resolve, reject) => {
//     const query = "SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?";
//     koneksi.query(query, [gdg_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const getGudangById = async (gdg_ID) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_stokgudang WHERE gdg_ID = ?";
    koneksi.query(query, [gdg_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.updateGudang = (gdg_ID, data) => {
//   return new Promise((resolve, reject) => {
//     const query = "UPDATE ppbs_stokgudang SET ? WHERE gdg_ID = ?";
//     koneksi.query(query, [data, gdg_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const updateGudang = (gdg_ID, data) => {
  return new Promise((resolve, reject) => {
    const query = "UPDATE ppbs_stokgudang SET ? WHERE gdg_ID = ?";
    koneksi.query(query, [data, gdg_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.deleteGudang = (gdg_ID) => {
//   return new Promise((resolve, reject) => {
//     const query = "DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?";
//     koneksi.query(query, [gdg_ID], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const deleteGudang = (gdg_ID) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM ppbs_stokgudang WHERE gdg_ID = ?";
    koneksi.query(query, [gdg_ID], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

// exports.updateLocationWeight = (weight, locationId) => {
//   return new Promise((resolve, reject) => {
//     const query =
//       "UPDATE ppbs_lokasi SET loc_weiutil = loc_weiutil - ? WHERE loc_ID = ?";
//     koneksi.query(query, [weight, locationId], (err, results) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(results);
//     });
//   });
// };

const updateLocationWeight = async (weight, locationId) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE ppbs_lokasi SET loc_weiutil = loc_weiutil - ? WHERE loc_ID = ?";
    koneksi.query(query, [weight, locationId], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const getAllBarangIDs = async () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT brg_ID FROM ppbs_barang";
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      const barangIds = results.map((row) => row.brg_ID);
      resolve(barangIds);
    });
  });
};

const getBarangInfoById = async (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM ppbs_barang WHERE brg_ID = ?";
    connection.query(query, [id], (err, results) => {
      if (err) {
        reject(err);
        return;
      }
      if (results.length === 0) {
        reject(new Error("Barang not found"));
        return;
      }
      const barangInfo = results[0];
      resolve(barangInfo);
    });
  });
};

module.exports = {
  getAllBarangIDs,
  getBarangInfoById,
  getAllGudang,
  createGudang,
  updateLocationWeight,
  getGudangById,
  updateGudang,
  deleteGudang,
};
