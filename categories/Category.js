const Sequilize = require('sequelize')
const conn = require('../database/database')

const Category = conn.define('categories', {
    name : {
        type : Sequilize.STRING,
        allowNull : false 
    },
    feature : {
        type : Sequilize.TEXT,
        allowNull : false
    }
} )

Category.sync( {force: false} )
    .then( () => {
        console.log("Tabela criada")
})

module.exports = Category

