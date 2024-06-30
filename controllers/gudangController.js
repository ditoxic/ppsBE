const gudangService = require("../services/gudangService");

// exports.createGudang = async (req, res) => {
//   try {
//     const result = await gudangService.createGudang(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create data!", error });
//   }
// };

const createGudang = async (req, res) => {
  try {
    const result = await gudangService.createGudang(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to create data!", error });
  }
};

// exports.getAllGudang = async (req, res) => {
//   try {
//     const result = await gudangService.getAllGudang();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving data", error });
//   }
// };

const getAllGudang = async (req, res) => {
  try {
    const result = await gudangService.getAllGudang();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// exports.getGudangById = async (req, res) => {
//   try {
//     const result = await gudangService.getGudangById(req.params.gdg_ID);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving data", error });
//   }
// };

const getGudangById = async (req, res) => {
  try {
    const result = await gudangService.getGudangById(req.params.gdg_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// exports.updateGudang = async (req, res) => {
//   try {
//     const result = await gudangService.updateGudang(
//       req.params.gdg_ID,
//       req.body
//     );
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update data!", error });
//   }
// };

const updateGudang = async (req, res) => {
  try {
    const result = await gudangService.updateGudang(
      req.params.gdg_ID,
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    console.log(error, "ini error");
    res.status(500).json({ message: "Failed to update data!", error });
  }
};

// exports.deleteGudang = async (req, res) => {
//   try {
//     const result = await gudangService.deleteGudang(req.params.gdg_ID);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete data!", error });
//   }
// };

const deleteGudang = async (req, res) => {
  try {
    const result = await gudangService.deleteGudang(req.params.gdg_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete data!", error });
  }
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
  getGudangById,
  updateGudang,
  deleteGudang,
};
