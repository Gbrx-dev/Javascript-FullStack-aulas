exports.paginaInicial = (req, res) => {
  res.render('index.ejs');
}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
}