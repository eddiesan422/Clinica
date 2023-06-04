const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const doctorSchema = mongoose.Schema(
    {
        nombres: {
            type: String,
            required: true
        },

        apellidos: {
            type: String,
            required: true
        },

        telefono: {
            type: Number,
            required: true
        },
especialidad: {
            type: String,
            required: true
        },
        correo: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        }
    }

)

doctorSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;