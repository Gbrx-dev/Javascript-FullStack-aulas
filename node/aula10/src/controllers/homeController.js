exports.paginaInicial = (req, res) => {
  res.render('index.ejs');
}

exports.trataPost = (req, res) => {
  res.send('Nova rota de POST.');
}