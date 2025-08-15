const express = require('express');
const app = express();
const routes = require('./routes');
app.use(express.urlencoded({ extends: true}));
app.use(routes);



app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor Iniciado port 3000');
});