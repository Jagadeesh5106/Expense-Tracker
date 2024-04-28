const Sequelize =  require('sequelize')

const sequelize = new Sequelize('expense-tracker','root','jagadeesh99',{
    dialect:'mysql',host:'localhost'
})

module.exports = sequelize;