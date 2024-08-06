const app = require('./server');
const musicasRoutes = require('./routes/musicas');
const errorHandler = require('./middlewares/error');

// Rotas
app.use('/musicas', musicasRoutes);

// Middleware de erro
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});