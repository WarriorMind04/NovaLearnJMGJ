const express = require('express');
const cors = require('cors');
const studentRoutes = require('./src/routes/Student.js');
const { errorHandler } = require('./src/middlewares/errorHandler.js');

const app = express();

app.use(cors());
app.use(express.json());

// Montar las rutas
app.use('/api/students', studentRoutes);

// Middleware de error
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
