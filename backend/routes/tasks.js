const express = require('express');
const router = express.Router();
const { getAllTasks, createTask } = require('../controllers/tasksController');

// Ruta para obtener todas las tareas
router.get('/', getAllTasks);

// Ruta para crear una nueva tarea
router.post('/', createTask);

// Otras rutas para actualizar y eliminar tareas...

module.exports = router;
