const sequelize = require('sequelize')

const connection = new sequelize('turismo_ecologico', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = connection