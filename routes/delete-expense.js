const express = require('express');
const router = express();
const deleteController = require('../controllers/delete-expense');

router.delete('/delete-expense/:id', deleteController);

module.exports = router;