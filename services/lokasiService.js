const lokasiRepository = require("../repositories/lokasiRepository");

// exports.createLokasi = async (data) => {
//   const result = await lokasiRepository.createLokasi(data);
//   if (result) {
//     return {
//       success: true,
//       message: "Successfully created and updated location weight!",
//     };
//   }
//   throw new Error("Failed to create data");
// };

// exports.getLokasi = async () => {
//   return await lokasiRepository.getLokasi();
// };

const getLokasi = async () => {
  return lokasiRepository.getLokasi();
};

// exports.getLokasiById = async (loc_ID) => {
//   return await lokasiRepository.getLokasiById(loc_ID);
// };

const getLokasiById = async (loc_ID) => {
  return await lokasiRepository.getLokasiById(loc_ID);
};

// exports.getLokasiUtil = async (loc_ID) => {
//   return await lokasiRepository.getLokasiUtil(loc_ID);
// };

const getLokasiUtil = async (loc_ID) => {
  return await lokasiRepository.getLokasiUtil(loc_ID);
};

// exports.updateLokasi = async (loc_ID, data) => {
//   const exists = await lokasiRepository.getLokasiById(loc_ID);
//   if (exists.length) {
//     await lokasiRepository.updateLokasi(loc_ID, data);
//     return { success: true, message: "Successfully updated data!" };
//   }
//   throw new Error("Data not found");
// };

const updateLokasi = async (loc_ID, data) => {
  const exists = await lokasiRepository.getLokasiById(loc_ID);
  if (exists.length) {
    await lokasiRepository.updateLokasi(loc_ID, data);
    return { success: true, message: "Successfully updated data!" };
  }
  throw new Error("Data not found");
};

// exports.deleteLokasi = async (loc_ID) => {
//   const exists = await lokasiRepository.getLokasiById(loc_ID);
//   if (exists.length) {
//     await lokasiRepository.deleteLokasi(loc_ID);
//     return { success: true, message: "Successfully deleted data!" };
//   }
//   throw new Error("Data not found");
// };

const deleteLokasi = async (loc_ID) => {
  const exists = await lokasiRepository.getLokasiById(loc_ID);
  if (exists.length) {
    await lokasiRepository.deleteLokasi(loc_ID);
    return { success: true, message: "Successfully deleted data!" };
  }
  throw new Error("Data not found");
};

module.exports = {
  getLokasi,
  getLokasiById,
  getLokasiUtil,
  updateLokasi,
  deleteLokasi,
};
