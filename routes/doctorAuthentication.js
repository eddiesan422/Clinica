const express = require("express");
const router = express.Router();
const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const doctorAuth = {};

doctorAuth.login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const doctor = await Doctor.findOne({ correo: correo });
    if (!doctor) {
      return res.status(404).json({ error: "Doctor no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, doctor.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña inválida" });
    }

    // Generar un JSON Web Token
    const token = jwt.sign({ id: doctor._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 // Un día en segundos
    });

    res.json({ token: token });
  } catch (error) {
    console.error("Error en la autenticación del doctor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = doctorAuth;