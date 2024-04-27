require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const config = require('./config/config.' + (process.env.NODE_ENV.trim() === 'production' ? 'prod' : 'dev'));

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Usando as configurações do arquivo de configuração
const { port } = config;

app.post('/api/user', (req, res) => {
  console.log(req.body)
  res.status(200).json({ result: req.body.text });
})

// Configuração do servidor Express...
app.listen(port, () => {
  console.log(`Servidor rodando em [http://localhost:${port}] em [${process.env.NODE_ENV.trim() === 'production' ? 'produção' : 'desenvolvimento'}]`);
});
// const port = 3000
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


// app.post('/api', (req, res) => {
//   console.log(req.body)
//   res.status(200).json({ result: req.body.text });
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`)
// })