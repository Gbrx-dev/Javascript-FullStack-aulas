exports.middlewareGlobal = (req, res, next) => {
  if (req.body && req.body.cliente) {
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }
  next();
};