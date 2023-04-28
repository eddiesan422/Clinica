const express = require("express");
const router = express.Router(); //manejador de rutas de express
const sesionSchema = require("../models/pacientes.js");

router.post("/empleados", (req, res) => {
    const empleado = empleadosSchema(req.body);
    empleado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;