const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios');
const Paciente = require('../models/pacientes');

// CREATE - Crear un nuevo usuario


router.post('/usuario', async (req, res) => {
  const {correo, password, tipoUsuario} = req.body;

  try {
    if (tipoUsuario === 'paciente') {
    
    }else if (tipoUsuario === 'doctor') {

    }else if (tipoUsuario === 'administrador') {
      
    }

    const usuario = new Usuario({ correo, password,tipoUsuario});
    await usuario.save();
    res.status(201).json(usuario);

  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
});

// READ - Obtener todos los usuarios
router.get('/usuario', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener los usuarios');
  }
});

// READ - Obtener un usuario por correo
router.get('/usuario/:correo', async (req, res) => {
  const { correo } = req.params;

  try {
    const usuario = await Usuario.findOne({correo: correo});
    if (!usuario) {
      return res.status(404).send('No se encontró el usuario');
    }
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al obtener el usuario');
  }
});

// UPDATE - Actualizar un usuario por correo
router.put('/usuario/:correo', async (req, res) => {
  const { correo } = req.params;

  try {
    let usuario = await Usuario.findOne({correo: correo});
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

// DELETE - Eliminar un usuario por correo
router.delete('/usuario/:id', async (req, res) => {
  const { correo } = req.params;

  try {
    const usuario = await Usuario.findOne({
      correo: correo
    });
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
