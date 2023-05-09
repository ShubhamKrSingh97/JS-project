const express = require('express');
const router = express.Router();
const getAllExpenseController = require('../controllers/get-all-expenses');
router.get('/get-all-expenses', getAllExpenseController);

module.exports = router;