const Sequelize = require('sequelize');
const sequelize = new Sequelize('expense_tracker', 'root', 'your password', {
    dialect: 'mysql',
    host: 'localhost'
});
module.exports = sequelize;
