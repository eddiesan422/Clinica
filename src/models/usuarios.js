const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  correo: { type: String, required: true },
  password: { type: String, required: true },
  tipoUsuario: { type: String, required: true }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
