const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  edad: { type: Number, required: true },
  correo: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);