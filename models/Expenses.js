const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Expense = sequelize.define('Expenses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,

    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = class Data {
    constructor(amount, description, category) {
        this.amount = amount;
        this.description = description;
        this.category = category;
    }
    addExpense() {
        return Expense.create({
            amount: this.amount,
            description: this.description,
            category: this.category
        })
    }
    static deleteExpense(ID) {
        return Expense.destroy({
            where: { id: ID }
        })
    }
    static getAllExpense() {
        return Expense.findAll();
    }

}


