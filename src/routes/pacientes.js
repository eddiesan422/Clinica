const express = require("express");
const router = express.Router(); //manejador de rutas de express
const pacientesSchema = require("../models/pacientes");

//Nuevo paciente

router.post("/pacientes", (req, res) => {
    const pacientes = pacientesSchema(req.body);
    pacientes
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;

//Consultar pacientes

router.get("/pacientes", (req, res) => {
    pacientesSchema.find().then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

//consultar citas

router.get("/pacientes/:", (req, res) => {

    const { citas } = req.body

    pacientesSchema.findOne({ citas })
        .then(cita => {
            if (cita) {
                res.json({ message: "Usted tiene una cita el día: " + cita })
            }
        })
        .catch((error) => req.jason({ message: error }));

})

router.put("/pacientes/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, telefono, historial, medicina, cita, correo, password } = req.body;
    pacientesSchema.updateOne({ _id: id }, {
        $set: { nombre, edad, telefono, historial, medicina, cita, correo, password }
    }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
})

router.delete("/pacientes/:id", (req, res) => {
    const { id } = req.params;
    pacientesSchema.deleteOne({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({ mensaje: error }));
});