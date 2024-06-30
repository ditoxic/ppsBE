const gudangRepository = require("../repositories/gudangRepository");

// exports.createGudang = async (data) => {
//   const result = await gudangRepository.createGudang(data);
//   if (result) {
//     await gudangRepository.updateLocationWeight(
//       data.gdg_weight,
//       data.gdg_Lokasi
//     );
//     return {
//       success: true,
//       message: "Successfully created and updated location weight!",
//     };
//   }
//   throw new Error("Failed to create data");
// };
const createGudang = async (data) => {
  const result = await gudangRepository.createGudang(data);
  if (result) {
    await gudangRepository.updateLocationWeight(
      data.gdg_weight,
      data.gdg_Lokasi
    );
    return {
      success: true,
      message: "Successfully created and updated location weight!",
    };
  }
  throw new Error("Failed to create data");
};
// exports.getAllGudang = async () => {
//     return await gudangRepository.getAllGudang();
// };

const getAllGudang = async () => {
  return gudangRepository.getAllGudang();
};

// exports.getGudangById = async (gdg_ID) => {
//   return await gudangRepository.getGudangById(gdg_ID);
// };

const getGudangById = async (gdg_ID) => {
  return await gudangRepository.getGudangById(gdg_ID);
};

// exports.updateGudang = async (gdg_ID, data) => {
//   const exists = await gudangRepository.getGudangById(gdg_ID);
//   if (exists.length) {
//     await gudangRepository.updateGudang(gdg_ID, data);
//     return { success: true, message: "Successfully updated data!" };
//   }
//   throw new Error("Data not found");
// };

const updateGudang = async (gdg_ID, data) => {
  const exists = await gudangRepository.getGudangById(gdg_ID);
  if (exists.length) {
    await gudangRepository.updateGudang(gdg_ID, data);
    return { success: true, message: "Successfully updated data!" };
  }
  throw new Error("Data not found");
};

exports.deleteGudang = async (gdg_ID) => {
  const exists = await gudangRepository.getGudangById(gdg_ID);
  if (exists.length) {
    await gudangRepository.deleteGudang(gdg_ID);
    return { success: true, message: "Successfully deleted data!" };
  }
  throw new Error("Data not found");
};

const deleteGudang = async (gdg_ID) => {
  const exists = await gudangRepository.getGudangById(gdg_ID);
  if (exists.length) {
    await gudangRepository.deleteGudang(gdg_ID);
    return { success: true, message: "Successfully deleted data!" };
  }
  throw new Error("Data not found");
};

// const updateLocationWeight = async () => {
//   return gudangRepository.updateLocationWeight();
// };

const getAllBarangIDs = async () => {
  return gudangRepository.getAllBarangIDs();
};

const getBarangInfoById = async (id) => {
  return gudangRepository.getBarangInfoById(id);
};

module.exports = {
  getAllBarangIDs,
  getBarangInfoById,
  getAllGudang,
  createGudang,
  getGudangById,
  updateGudang,
  deleteGudang,
  //   updateLocationWeight,
};
