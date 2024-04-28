const Sequelize = require('sequelize')
const sequelize = require('../config/database');

const Expense = sequelize.define('expense',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    amount:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    type:{
        type: Sequelize.STRING,
        allowNull : false
    }
})
module.exports = Expense;