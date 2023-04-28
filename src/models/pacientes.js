const mongoose = require("mongoose");
const pacientesSchema = mongoose.Schema(
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

        historial:{
            type: String,
            required: true
        },

        medicina: {
            type: String,
            required: true
        }
    }

    //Aquí agregué unas cosas que creo son fundamentales con el paciente, tanto el nombre, documento y así
    //esto puede cambiar si así lo quieren
)