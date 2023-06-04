const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/adminController");
const doctorCtrl = require("../controllers/doctorController");
const pacienteCtrl = require("../controllers/pacienteController");

// Rutas para los administradores
router.post("/admins", adminCtrl.createAdmin);
router.get("/admins", adminCtrl.getAdmins);
router.get("/admins/:id", adminCtrl.getAdminById);

// Rutas para los doctores
router.post("/doctors", doctorCtrl.createDoctor);
router.get("/doctors", doctorCtrl.getDoctors);
router.get("/doctors/:id", doctorCtrl.getDoctorById);

// Rutas para los pacientes
router.post("/pacientes", pacienteCtrl.createPaciente);
router.get("/pacientes", pacienteCtrl.getPacientes);
router.get("/pacientes/:id", pacienteCtrl.getPacienteById);

module.exports = router;

