const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const sesionRoutes = require("./routes/sesion");
const citasRoutes = require("./routes/citas");
const usuariosRoutes = require("./routes/usuarios")
const medicinasRoutes = require("./routes/medicinas") // importa las rutas de sesiones
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", sesionRoutes); // usa "sesionRoutes" en lugar de "librosRoutes"
app.use("/api", citasRoutes);
app.use("/api", usuariosRoutes);
app.use("/api", medicinasRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

