const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');

// CREATE - Crear un nuevo usuario
router.post('/', async (req, res) => {
  const { nombres, apellidos, edad, correo, password } = req.body;

  try {
    const usuario = new Usuario({ nombres, apellidos, edad, correo, password });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
});

// READ - Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los usuarios');
  }
});

// READ - Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).send('No se encontró el usuario');
    }
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el usuario');
  }
});

// UPDATE - Actualizar un usuario por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).send('No se encontró el usuario');
    }
    usuario = Object.assign(usuario, req.body);
    await usuario.save();
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al actualizar el usuario');
  }
});

// DELETE - Eliminar un usuario por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).send('No se encontró el usuario');
    }
    await usuario.remove();
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el usuario');
  }
});

module.exports = router;