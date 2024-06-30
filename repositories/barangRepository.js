// repositories/barangRepository.js

const koneksi = require('../config/database');

class BarangRepository {
  constructor() {
    this.ppbs_barang = 'ppbs_barang';
  }

  async getAllBarang() {
    const query = `SELECT * FROM ${this.ppbs_barang}`;
    try {
      const rows = await koneksi.query(query);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching barang data: ${error.message}`);
    }
  }

  async getBarangById(brg_id) {
    const query = `SELECT * FROM ${this.ppbs_barang} WHERE brg_id = ?`;
    try {
      const [rows] = await koneksi.query(query, [brg_id]);
      return rows;
    } catch (error) {
      throw new Error(`Error fetching barang by ID: ${error.message}`);
    }
  }

  async createBarang(barangData) {
    const { brg_Nama, brg_Jenis, brg_Berat, brg_Satuan } = barangData;
    const query = 'INSERT INTO ppbs_barang (brg_Nama, brg_Jenis, brg_Berat, brg_Satuan) VALUES (?, ?, ?, ?)';
    try {
      const result = await koneksi.query(query, [brg_Nama, brg_Jenis, brg_Berat, brg_Satuan]);
      return result.insertId; // return the ID of the inserted record
    } catch (error) {
      throw new Error(`Error creating barang: ${error.message}`);
    }
  }

  async updateBarang(brg_id, barangData) {
    const { brg_Nama, brg_Jenis, brg_Berat, brg_Satuan } = barangData;
    const query = 'UPDATE ppbs_barang SET brg_Nama = ?, brg_Jenis = ?, brg_Berat = ?, brg_Satuan = ? WHERE brg_id = ?';
    try {
      const result = await koneksi.query(query, [brg_Nama, brg_Jenis, brg_Berat, brg_Satuan, brg_id]);
      return result.affectedRows; // return the number of affected rows
    } catch (error) {
      throw new Error(`Error updating barang: ${error.message}`);
    }
  }

  async deleteBarang(brg_id) {
    const query = 'DELETE FROM ppbs_barang WHERE brg_id = ?';
    try {
      const result = await koneksi.query(query, [brg_id]);
      return result.affectedRows; // return the number of affected rows
    } catch (error) {
      throw new Error(`Error deleting barang: ${error.message}`);
    }
  }
}

module.exports = new BarangRepository();
