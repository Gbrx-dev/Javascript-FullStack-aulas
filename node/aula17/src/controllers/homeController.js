exports.paginaInicial = (req, res) => {
  console.log(req.flash('error'), req.flash('success'), req.flash('info'))
  res.render('index.ejs', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });

}

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
}