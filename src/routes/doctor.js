const express = require("express");
const router = express.Router(); //manejador de rutas de express
const doctorSchema = require("../models/doctor");

//Nuevo doctor

router.post("/doctor", (req, res) => {
    const doctor = doctorSchema(req.body);
    doctor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

router.get("/doctor", (req, res) => {
    doctorSchema.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

router.put("/doctor/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, telefono, historial, idClinica } = req.body;
    doctorSchema.updateOne({ _id: id }, {
        $set: { nombre, edad, telefono, historial, idClinica, correo, password }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

router.delete("/doctor/:id", (req, res) => {
    const { id } = req.params;
    doctorSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});
