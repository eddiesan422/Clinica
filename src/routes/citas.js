const express = require("express");
const router = express.Router();
const Cita = require("../models/citas");

// Ruta para obtener todas las citas
router.get("/citas", async (req, res) => {
  try {
    const citas = await Cita.find();
    res.json(citas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear una nueva cita
router.post("/citas", async (req, res) => {
  const cita = new Cita({
    nombrePaciente: req.body.nombrePaciente,
    nombreMedico: req.body.nombreMedico,
    hora: req.body.hora,
    fecha: req.body.fecha,
  });

  try {
    const nuevaCita = await cita.save();
    res.status(201).json(nuevaCita);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para obtener una cita por ID
router.get("/citas:id", obtenerCita, (req, res) => {
  res.json(res.cita);
});

// Ruta para actualizar una cita
router.patch("/citas:id", obtenerCita, async (req, res) => {
  if (req.body.nombrePaciente != null) {
    res.cita.nombrePaciente = req.body.nombrePaciente;
  }

  if (req.body.nombreMedico != null) {
    res.cita.nombreMedico = req.body.nombreMedico;
  }

  if (req.body.hora != null) {
    res.cita.hora = req.body.hora;
  }

  if (req.body.fecha != null) {
    res.cita.fecha = req.body.fecha;
  }

  if (req.body.aceptada != null) {
    res.cita.aceptada = req.body.aceptada;
  }

  if (req.body.cancelada != null) {
    res.cita.cancelada = req.body.cancelada;
  }

  if (req.body.medicoAnterior != null) {
    res.cita.medicoAnterior = req.body.medicoAnterior;
  }

  try {
    const citaActualizada = await res.cita.save();
    res.json(citaActualizada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar una cita
router.delete("/citas:id", obtenerCita, async (req, res) => {
  try {
    await res.cita.remove();
    res.json({ message: "Cita eliminada" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware para obtener una cita por ID
async function obtenerCita(req, res, next) {
  let cita;
  try {
    cita = await Cita.findById(req.params.id);
    if (cita == null) {
      return res.status(404).json({ message: "No se encontró la cita" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.cita = cita;
  next();
}

module.exports = router;