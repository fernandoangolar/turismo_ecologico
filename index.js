const express = require('express')
const connection = require('./database/database')
const app = express()
const port  = 3000

app.set('view engine', 'ejs')

connection
    .authenticate()
    .then( () => {
        console.log('Conexão feita com o banco de dados')
    })
    .catch( (msqErro) => {
        console.log(msqErro)
    })

app.get('/teste', (req, res) => {

    const name = req.query.name
    
    res.render('index.ejs', {name : name})
})

app.listen( port, () => {
    console.log( 'A servidor está rodando na porta', port )
} )