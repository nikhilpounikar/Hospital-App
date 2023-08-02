// Import the required module
const express = require('express');

// Create a router instance using Express Router
const router = express.Router();

// This log statement will be executed whenever this module is loaded, indicating that the main route file has been initialized.
console.log("Router loaded");

// Use the sub-routes from different route files based on the URL path

// Mount the 'doctor_route' on the '/doctor' path. All routes defined in the 'doctor_route' will be prefixed with '/doctor'.
router.use('/doctor', require('./doctor_route'));

// Mount the 'patient_route' on the '/patients' path. All routes defined in the 'patient_route' will be prefixed with '/patients'.
router.use('/patients', require('./patient_route'));

// Mount the 'reports_route' on the '/reports' path. All routes defined in the 'reports_route' will be prefixed with '/reports'.
router.use('/reports', require('./reports_route'));

// Export the router to be used in other parts of the application
module.exports = router;
