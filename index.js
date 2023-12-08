const express = require('express')
const connection = require('./database/database')
const Category = require('./database/Category')
const bodyParser = require('body-parser');
const app = express()
const port  = 4000



app.set('view engine', 'ejs')

connection
    .authenticate()
    .then( () => {
        console.log('Conexão feita com o banco de dados')
    })
    .catch( (msqErro) => {
        console.log(msqErro)
    })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/teste', (req, res) => {

    const query = 'SELECT * FROM categories';

    // Executa a consulta no banco de dados
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Erro ao buscar dados do banco de dados:', err);
        res.status(500).json({ error: 'Erro ao buscar dados do banco de dados' });
      } else {
        res.status(200).json(results);
      }
    });
})

app.listen( port, () => {
    console.log( 'A servidor está rodando na porta', port )
} )