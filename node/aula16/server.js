require('dotenv').config(); // Sempre no topo

const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Conexão com o MongoDB
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => app.emit('pronto'))
  .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'public')));

// Configuração de sessão
const sessionOptions = session({
  secret: 'aeaeaeaeaeaeaeaeaea()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Versão nova do connect-mongo
  resave: false,
  saveUninitialized: false, // Corrigido
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

// Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Middlewares e rotas
app.use(middlewareGlobal);
app.use(routes);

// Inicialização do servidor
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor iniciado na porta 3000');
  });
});
