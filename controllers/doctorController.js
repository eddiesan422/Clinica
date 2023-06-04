const doctorCtrl = {};
const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
let {token} = require("morgan");

doctorCtrl.createDoctor = async (req, res) => {
  const doctorData = req.body;
  const newDoctor = new Doctor({
    nombres: doctorData.nombres,
    apellidos: doctorData.apellidos,
    telefono: doctorData.telefono,
    especialidad: doctorData.especialidad,
    correo: doctorData.correo,
    password: doctorData.password,
  });
newDoctor.password = await newDoctor.encryptPassword(newDoctor.password);

  try {
    await newDoctor.save();
    res.json({ status: "Doctor creado exitosamente" });
  } catch (error) {
    console.error("Error al crear el doctor:", error);
    res.status(500).json({ error: "Error al crear el doctor" });
  }
};


doctorCtrl.getDoctors = async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (error) {
      console.error("Error al obtener los doctores:", error);
      res.status(500).json({ error: "Error al obtener los doctores" });
    }
  };
  
  doctorCtrl.getDoctorById = async (req, res) => {
    try {
      const { id } = req.params;
      const doctorById = await Doctor.findById(id);
  
      if (!doctorById) {
        return res.status(404).json({ message: "Doctor no encontrado" });
      }
  
      res.json(doctorById);
    } catch (error) {
      console.error("Error al obtener el doctor:", error);
      res.status(500).json({ error: "Error al obtener el doctor" });
    }
  };

module.exports = doctorCtrl;