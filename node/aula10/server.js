const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

app.use(express.urlencoded({ extends: true}));

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('views engine', 'ejs')
app.use(routes);



app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Iniciado port 3000');
});