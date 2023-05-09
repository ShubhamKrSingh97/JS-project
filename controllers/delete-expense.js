const Data = require("../models/Expenses");

module.exports = async (req, res) => {
    try {
        await Data.deleteExpense(req.params.id);
        res.send();
    }
    catch (error) {
        res.send(error);
    }

}