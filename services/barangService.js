// services/barangService.js

const barangRepository = require('../repositories/barangRepository');

class BarangService {
  async getAllBarang() {
    try {
      const barang = await barangRepository.getAllBarang();
      return barang;
    } catch (error) {
      throw new Error(`Error getting barang data: ${error.message}`);
    }
  }

  async getBarangById(brg_id) {
    try {
      const barang = await barangRepository.getBarangById(brg_id);
      if (!barang) {
        throw new Error('Barang not found');
      }
      return barang;
    } catch (error) {
      throw new Error(`Error getting barang by ID: ${error.message}`);
    }
  }

  async createBarang(barangData) {
    try {
      const newBarangId = await barangRepository.createBarang(barangData);
      return newBarangId;
    } catch (error) {
      throw new Error(`Error creating barang: ${error.message}`);
    }
  }

  async updateBarang(brg_id, barangData) {
    try {
      const affectedRows = await barangRepository.updateBarang(brg_id, barangData);
      if (affectedRows === 0) {
        throw new Error('Barang not found or no changes applied');
      }
      return affectedRows;
    } catch (error) {
      throw new Error(`Error updating barang: ${error.message}`);
    }
  }

  async deleteBarang(brg_id) {
    try {
      const affectedRows = await barangRepository.deleteBarang(brg_id);
      if (affectedRows === 0) {
        throw new Error('Barang not found');
      }
      return affectedRows;
    } catch (error) {
      throw new Error(`Error deleting barang: ${error.message}`);
    }
  }
}

module.exports = new BarangService();
