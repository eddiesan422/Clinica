const express = require('express');
const router = express.Router();
const usuarioSchema = require('../models/usuarios');

// CREATE - Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  const { nombres, apellidos, edad, correo, password } = req.body;

  try {
    const usuario = new usuarioSchema({ nombres, apellidos, edad, correo, password });
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
});

// READ - Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuarioSchema.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los usuarios');
  }
});

// READ - Obtener un usuario por ID
router.get('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await usuarioSchema.findById(id);
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
router.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    let usuario = await usuarioSchema.findById(id);
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
router.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await usuarioSchema.findById(id);
    if (!usuario) {
      return res.status(404).send('No se encontró el usuario');
    }
    await usuarioSchema.deleteOne({_id: id});
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al eliminar el usuario');
  }
});

module.exports = router;