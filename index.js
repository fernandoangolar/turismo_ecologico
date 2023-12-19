const express = require('express')
const connection = require('./database/database')
const bodyParser = require('body-parser');
const app = express()
const Category = require('./categories/Category')

const CategoryController = require('./categories/CategoryController')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connection
    .authenticate()
    .then( () => {
        console.log('Conexão feita com o banco de dados')
    })
    .catch( (msqErro) => {
        console.log(msqErro)
    })

app.use('/', CategoryController)

app.get('/', (req, res) => {
  res.render('index')
})


const port  = 4000
app.listen( port, () => {
    console.log( 'A servidor está rodando na porta', port )
} )