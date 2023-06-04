const adminCtrl = {};
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
let {token} = require("morgan");


adminCtrl.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error("Error al obtener los administradores:", error);
    res.status(500).json({ error: "Error al obtener los administradores" });
  }
};

adminCtrl.getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const adminById = await Admin.findById(id);

    if (!adminById) {
      return res.status(404).json({ message: "Administrador no encontrado" });
    }

    res.json(adminById);
  } catch (error) {
    console.error("Error al obtener el administrador:", error);
    res.status(500).json({ error: "Error al obtener el administrador" });
  }
};
adminCtrl.getAdmins = async (req, res) => {
    try {
      const admins = await Admin.find();
      res.json(admins);
    } catch (error) {
      console.error("Error al obtener los administradores:", error);
      res.status(500).json({ error: "Error al obtener los administradores" });
    }
  };
  
  adminCtrl.getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      const adminById = await Admin.findById(id);
  
      if (!adminById) {
        return res.status(404).json({ message: "Administrador no encontrado" });
      }
  
      res.json(adminById);
    } catch (error) {
      console.error("Error al obtener el administrador:", error);
      res.status(500).json({ error: "Error al obtener el administrador" });
    }
  };
module .exports = adminCtrl;  