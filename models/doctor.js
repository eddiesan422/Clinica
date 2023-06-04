const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true
        },

        apellidos: {
            type: String,
            required: true
        },

        telefono: {
            type: Number,
            required: true
        },
especialidad: {
            type: String,
            required: true
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

)

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;