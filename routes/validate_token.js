const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send('Solicitud no autorizada');
  }

  const token = authHeader.substring(7);

  try {
    const payload = jwt.verify(token, process.env.SECRET);

    if (req.baseUrl.includes('admin')) {
      req.adminId = payload.id;
    } else if (req.baseUrl.includes('doctor')) {
      req.doctorId = payload.id;
    } else if (req.baseUrl.includes('paciente')) {
      req.pacienteId = payload.id;
    }

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send('Token expirado');
    }
    return res.status(401).send('Solicitud no autorizada');
  }
};

module.exports = verifyToken;