const Sequelize = require('sequelize')

const connection = new Sequelize('turismo_ecologico', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = connection