const express = require("express");
const router = express.Router(); //manejador de rutas de express
const doctorSchema = require("../models/doctor.js");

//Nuevo doctor

router.post("/doctor", (req, res) => {
    const doctor = doctorSchema(req.body);
    doctor
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;