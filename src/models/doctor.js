const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },

        documento: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },

        telefono: {
            type: String,
            required: true
        },

        idClinica: {
            type: String,
            required: false
        },

        correo: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }

    //Aquí agregué unas cosas que creo son fundamentales con el paciente, tanto el nombre, documento y así
    //esto puede cambiar si así lo quieren
)