const express = require("express");
const router = express.Router();
const adminCtrl = require("../controllers/adminController");
const doctorCtrl = require("../controllers/doctorController");
const pacienteCtrl = require("../controllers/pacienteController");
const adminAuth = require("./adminAuthentication");
const doctorAuth = require("./doctorAuthentication");
const pacienteAuth = require("./pacienteAuthentication");
const validateToken = require("./validate_token");


router.post("/admins", adminCtrl.createAdmin);
router.get("/admins", validateToken, adminCtrl.getAdmins);
router.get("/admins/:id", validateToken, adminCtrl.getAdminById);

// Rutas de autenticación para los administradores
router.post("/admins/login", adminAuth.login);

// Rutas para los doctores
router.post("/doctors", validateToken, doctorCtrl.createDoctor);
router.get("/doctors", validateToken, doctorCtrl.getDoctors);
router.get("/doctors/:id", validateToken, doctorCtrl.getDoctorById);

// Rutas de autenticación para los doctores
router.post("/doctors/login", doctorAuth.login);

// Rutas para los pacientes
router.post("/pacientes", validateToken, pacienteCtrl.createPaciente);
router.get("/pacientes", validateToken, pacienteCtrl.getPacientes);
router.get("/pacientes/:id", validateToken, pacienteCtrl.getPacienteById);

// Rutas de autenticación para los pacientes
router.post("/pacientes/login", pacienteAuth.login);

module.exports = router;

