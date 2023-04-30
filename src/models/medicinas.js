const mongoose = require('mongoose');

const medicinaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Medicina', medicinaSchema);