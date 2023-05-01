const express = require('express');
const router = express.Router();
const Medicina = require('../models/medicinas');

// CREATE - Crear una nueva medicina
router.post('/medicinas', async (req, res) => {
  const { nombre, descripcion, cantidad, precio } = req.body;

  try {
    const medicina = new Medicina({ nombre, descripcion, cantidad, precio });
    await medicina.save();
    res.status(201).json(medicina);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la medicina');
  }
});

// READ - Obtener todas las medicinas
router.get('/medicinas', async (req, res) => {
  try {
    const medicinas = await Medicina.find();
    res.json(medicinas);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener las medicinas');
  }
});

// READ - Obtener una medicina por ID
router.get('/medicinas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const medicina = await Medicina.findById(id);
    if (!medicina) {
      return res.status(404).send('No se encontró la medicina');
    }
    res.json(medicina);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener la medicina');
  }
});

// UPDATE - Actualizar una medicina por ID
router.put('/medicinas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let medicina = await Medicina.findById(id);
    if (!medicina) {
      return res.status(404).send('No se encontró la medicina');
    }
    medicina = Object.assign(medicina, req.body);
    await medicina.save();
    res.json(medicina);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar la medicina');
  }
});

// DELETE - Eliminar una medicina por ID
router.delete('/medicinas/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const medicina = await Medicina.findById(id);
    if (!medicina) {
      return res.status(404).send('No se encontró la medicina');
    }
    await medicina.remove();
    res.json({ mensaje: 'Medicina eliminada correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar la medicina');
  }
});

module.exports = router;