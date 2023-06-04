const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminAuth = {};

adminAuth.login = async (req, res) => {
  const { correo, password } = req.body;

  try {
    const admin = await Admin.findOne({ correo: correo });
    if (!admin) {
      return res.status(404).json({ error: "Administrador no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Contraseña inválida" });
    }

    // Generar un JSON Web Token
    const token = jwt.sign({ id: admin._id }, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 // Un día en segundos
    });

    res.json({ token: token });
  } catch (error) {
    console.error("Error en la autenticación del administrador:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = adminAuth;