const pacienteCtrl = {};
const Paciente = require("../models/paciente");
const jwt = require("jsonwebtoken");
let {token} = require("morgan");

pacienteCtrl.createPaciente = async (req, res) => {
    const pacienteData = req.body;
    const newPaciente = new Paciente({
      nombres: pacienteData.nombres,
      apellidos: pacienteData.apellidos,
      edad: pacienteData.edad,
      telefono: pacienteData.telefono,
      historial: pacienteData.historial,
      medicina: pacienteData.medicina,
      cita: pacienteData.cita,
      correo: pacienteData.correo,
      password: pacienteData.password,
    });
    newPaciente.password = await newPaciente.encryptPassword(newPaciente.password);
    try {
      await newPaciente.save();
      res.json({ status: "Paciente creado exitosamente" });
    } catch (error) {
      console.error("Error al crear el paciente:", error);
      res.status(500).json({ error: "Error al crear el paciente" });
    }
  };
  
  pacienteCtrl.getPacientes = async (req, res) => {
    try {
      const pacientes = await Paciente.find();
      res.json(pacientes);
    } catch (error) {
      console.error("Error al obtener los pacientes:", error);
      res.status(500).json({ error: "Error al obtener los pacientes" });
    }
  };
  
  pacienteCtrl.getPacienteById = async (req, res) => {
    try {
      const { id } = req.params;
      const pacienteById = await Paciente.findById(id);
  
      if (!pacienteById) {
        return res.status(404).json({ message: "Paciente no encontrado" });
      }
  
      res.json(pacienteById);
    } catch (error) {
      console.error("Error al obtener el paciente:", error);
      res.status(500).json({ error: "Error al obtener el paciente" });
    }
  };
  
  module.exports = pacienteCtrl;