const Task = require('../models/Task');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error('Error al obtener las tareas:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({
    title,
    description,
    completed: false
  });
  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error('Error al crear una nueva tarea:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
