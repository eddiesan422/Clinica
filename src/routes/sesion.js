const express = require("express");
const router = express.Router(); //manejador de rutas de express
const sesionSchema = require("../models/Sesion");
router.post("/login", (req, res) => {
    const { correo, password } = req.body;

    sesionSchema.findOne({ correo, password })
        .then(sesion => {
            if (sesion) {
                res.json({ message: "Inicio de sesión exitoso" });
            } else {
                res.status(401).json({ message: "Credenciales inválidas" });
            }
        })
        .catch((error) => res.json({ message: error }));
});
    module.exports = router;