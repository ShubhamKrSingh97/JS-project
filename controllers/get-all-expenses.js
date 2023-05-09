const Data = require("../models/Expenses");

module.exports = async (req, res) => {
    const allExp = await Data.getAllExpense();
    res.json(allExp);
}