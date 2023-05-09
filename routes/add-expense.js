const express = require('express');
const router = express.Router();
const addExpenseController = require('../controllers/add-expense');

router.post('/add-expense', addExpenseController);

module.exports = router;