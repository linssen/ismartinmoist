function notFound(req, res) {
  res.status(404).render('./app/errors/notFound.html');
}

module.exports = notFound;
