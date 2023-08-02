// Import the required modules
const express = require('express');
const passport = require('passport');

// Create a router instance using Express Router
const router = express.Router();

// Import the patient_controller which contains the functions to handle patient-related routes
const patientController = require('../controllers/patient_controller');

// This log statement will be executed whenever this module is loaded, indicating that the patient route has been initialized.
console.log('in patient route')

// Define the routes and their corresponding controller functions

// POST route for patient registration. When a POST request is made to '/register',
// the 'register' function from the 'patientController' will be called.
// Note: The 'passport.authenticate('jwt', {session:false})' middleware is used here to enforce authentication using JWT strategy before allowing access to the route.
router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);

// POST route for creating a new report for a patient with the specified ID. When a POST request is made to '/:id/create_report',
// the 'createReport' function from the 'patientController' will be called.
// Note: The 'passport.authenticate('jwt', {session:false})' middleware is used here to enforce authentication using JWT strategy before allowing access to the route.
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.createReport);

// GET route to retrieve all reports for a patient with the specified ID. When a GET request is made to '/:id/all_reports',
// the 'getReports' function from the 'patientController' will be called.
// Note: The 'passport.authenticate('jwt', {session:false})' middleware is used here to enforce authentication using JWT strategy before allowing access to the route.
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.getReports);

// Export the router to be used in other parts of the application
module.exports = router;
