const barangService = require('../services/barangService');

exports.createBarang = async (req, res) => {
    try {
        const result = await barangServiceService.createBarang(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create data!', error });
    }
};

exports.getAllBarangIDs = async (req, res) => {
    try {
        const result = await barangServiceService.getAllBarangIDs();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
};

exports.getBarangById = async (req, res) => {
    try {
        const result = await barangService.getBarangById(req.params.brg_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error });
    }
};

exports.updateBarang = async (req, res) => {
    try {
        const result = await barangService.updateBarang(req.params.brg_id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update data!', error });
    }
};

exports.deleteBarang = async (req, res) => {
    try {
        const result = await barangService.deleteBarang(req.params.brg_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete data!', error });
    }
};

