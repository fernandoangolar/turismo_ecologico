const Sequelize = require('sequelize')
const conn = require('./database')

const Category = conn.define('categories', {
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    feature : {
        type : Sequelize.TEXT,
        allowNull : false
    }
})

Category.sync( {force: true} )
    .then( () => {
        console.log('Create table')
})


module.exports = Category