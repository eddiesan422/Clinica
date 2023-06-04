const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  correo: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin= mongoose.model('Admin', adminSchema);
module.exports = Admin;