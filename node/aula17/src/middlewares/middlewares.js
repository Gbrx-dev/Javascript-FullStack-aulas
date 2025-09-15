exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da varíavel local,';
  if (req.body && req.body.cliente) {
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }
  next();
};

exports.checkCrsfError = (err, req, res, next) => {
  if(err && 'EBADCSRFTOKEN' === err.code) {
    return res.send('BAD CSRF. ')
  }
}

exports.csrfMiddleware = (req, res, next) =>{
  res.locals.csrfToken = req.csrfToken();
  next();
}