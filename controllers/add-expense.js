const Data = require("../models/Expenses");

module.exports = async (req, res) => {
    const obj = new Data(req.body.amount, req.body.description, req.body.category);
    const exp = await obj.addExpense();
    res.json(exp);
}