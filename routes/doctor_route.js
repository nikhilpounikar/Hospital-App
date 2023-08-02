// getting dependencies
const express = require('express');

// getting router instance
const router = express.Router();
const doctorController = require('../controllers/doctor_controller');

console.log('in doctor route')
router.post('/register',doctorController.register);
router.get('/login',doctorController.login);


module.exports = router;