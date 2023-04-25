const mongoose = require("mongoose"); //importamos mongoose
const sesionSchema = new mongoose.Schema({
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true }
    });
    module.exports = mongoose.model('Sesion', sesionSchema);
    