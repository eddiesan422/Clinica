const express = require("express");
const router = express.Router();
const usuarioSchema = require("../models/usuarios");

router.post("/sesion", async (req, res) => {
  const { correo, password } = req.body;

  try {
    const usuario = await usuarioSchema.findOne({ correo, password });
    if (usuario) {
      res.json({ message: "Inicio de sesión exitoso" });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Hubo un error al iniciar sesión" });
  }
});

module.exports = router;