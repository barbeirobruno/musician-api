function errorHandler(err, req, res, next) {
    console.error(err.stack);
    
    if (err.statusCode === 400) {
        res.status(400).json({ error: 'Requisição inválida!' });
    } else {
        res.status(500).json({ error: 'Algo deu errado!' });
    }
}
 
  module.exports = errorHandler;