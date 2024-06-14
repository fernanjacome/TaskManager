const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/taskmaster', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch(err => console.error('Error de conexión a la base de datos:', err));

app.use(express.json());
app.use(cors()); // Agrega esta línea para habilitar CORS

app.get('/', (req, res) => {
    res.send('¡Bienvenido a TaskMaster Plus!');
});

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
