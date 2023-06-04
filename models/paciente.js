const mongoose = require("mongoose");


const medicinaSchema = mongoose.Schema(
    { 
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        precio: { type: Number, required: true },
        cantidad: { type: Number, required: true },
    }
)
        




const pacienteSchema = mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true
        },

        Apellidos: {
            type: String,
            required: true
        },
        edad: {
            type: Number,
            required: true
        },

        telefono: {
            type: Number,
            required: true
        },

        historial:{
            type: String,
            required: true
        },

        medicina: {
          medicinaDescription:{ type: medicinaSchema, required: true},
        },

        cita: {
            type: Date,
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


)

 const Paciente= mongoose.model('paciente', pacienteSchema);
 module.exports = Paciente;