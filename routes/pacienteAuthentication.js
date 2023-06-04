const express = require("express");
const router = express.Router();
const Paciente = require("../models/paciente");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pacienteAuth = {};

pacienteAuth.login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const paciente = await Paciente.findOne({ correo: correo });
    if (!paciente) {
      return res.status(404).json({ error: "Paciente no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, paciente.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña inválida" });
    }

    // Generar un JSON Web Token
    const token = jwt.sign({ id: paciente._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 // Un día en segundos
    });

    res.json({ token: token });
  } catch (error) {
    console.error("Error en la autenticación del paciente:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = pacienteAuth;