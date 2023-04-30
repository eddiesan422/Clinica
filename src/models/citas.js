const mongoose = require("mongoose");

const citasSchema = new mongoose.Schema({
    nombrePaciente: {
        type: String,
        required: true
    },
    nombreMedico: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    aceptada: {
        type: Boolean,
        required: false
    },
    cancelada: {
        type: Boolean,
        default: false
    },
    fechaModificacion: {
        type: Date,
        required: false
    },
    medicoAnterior: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Cita', citasSchema);