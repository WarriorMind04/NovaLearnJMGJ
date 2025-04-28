const express = require('express');

const router = express.Router();
const StudentHttpHandler = require('../handlers/Student');
const SchoolDBFactory = require('../db/school');
const StudentController = require('../controllers/Student');

// Crear el servicio y controller
const studentService = SchoolDBFactory.create('fake');
const studentController = new StudentController(studentService);

// Crear el handler
const studentHandler = new StudentHttpHandler(studentController);

// Rutas
router.post('/login', studentHandler.login.bind(studentHandler));

module.exports = router;
