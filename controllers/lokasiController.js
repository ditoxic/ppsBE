const lokasiService = require("../services/lokasiService");

// exports.createLokasi = async (req, res) => {
//   try {
//     const result = await lokasiService.createLokasi(req.body);
//     res.status(201).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create data!", error });
//   }
// };

// exports.getLokasi = async (req, res) => {
//   try {
//     const result = await lokasiService.getLokasi();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving data", error });
//   }
// };

const getLokasi = async (req, res) => {
  try {
    const result = await lokasiService.getLokasi();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// exports.getLokasiById = async (req, res) => {
//   try {
//     const result = await lokasiService.getLokasiById(req.params.loc_ID);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving data", error });
//   }
// };

const getLokasiById = async (req, res) => {
  try {
    const result = await lokasiService.getLokasiById(req.params.loc_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// exports.getLokasiUtil = async (req, res) => {
//   try {
//     const result = await lokasiService.getLokasiUtil(req.params.loc_ID);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Error retrieving data", error });
//   }
// };

const getLokasiUtil = async (req, res) => {
  try {
    const result = await lokasiService.getLokasiUtil(req.params.loc_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

// exports.updateLokasi = async (req, res) => {
//   try {
//     const result = await lokasiService.updateLokasi(
//       req.params.loc_ID,
//       req.body
//     );
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update data!", error });
//   }
// };

const updateLokasi = async (req, res) => {
  try {
    const result = await lokasiService.updateLokasi(
      req.params.loc_ID,
      req.body
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to update data!", error });
  }
};

// exports.deleteLokasi = async (req, res) => {
//   try {
//     const result = await lokasiService.deleteLokasi(req.params.loc_ID);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete data!", error });
//   }
// };

const deleteLokasi = async (req, res) => {
  try {
    const result = await lokasiService.deleteLokasi(req.params.loc_ID);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete data!", error });
  }
};

module.exports = {
  getLokasi,
  getLokasiById,
  getLokasiUtil,
  updateLokasi,
  deleteLokasi,
};
