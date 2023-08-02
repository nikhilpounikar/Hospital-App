// Import the required modules
const express = require('express');

// Create a router instance using Express Router
const router = express.Router();

// Import the doctor_controller which contains the functions to handle doctor-related routes
const doctorController = require('../controllers/doctor_controller');

// This log statement will be executed whenever this module is loaded, indicating that the doctor route has been initialized.
console.log('in doctor route')

// Define the routes and their corresponding controller functions

// POST route for doctor registration. When a POST request is made to '/register', the 'register' function from the 'doctorController' will be called.
router.post('/register', doctorController.register);

// GET route for doctor login. When a GET request is made to '/login', the 'login' function from the 'doctorController' will be called.
router.get('/login', doctorController.login);

// Export the router to be used in other parts of the application
module.exports = router;
