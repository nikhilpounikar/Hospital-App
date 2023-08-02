// Import the required modules
const express = require('express');
const passport = require('passport');

// Create a router instance using Express Router
const router = express.Router();

// Import the reports_controller which contains the function to handle reports-related routes
const reportsController = require('../controllers/reports_controller');

// Define the route and its corresponding controller function

// GET route to retrieve reports by status. When a GET request is made to '/:status',
// the 'getReportsByStatus' function from the 'reportsController' will be called.
// Note: The 'passport.authenticate('jwt', {session:false})' middleware is used here to enforce authentication using JWT strategy before allowing access to the route.
router.get('/:status', passport.authenticate('jwt', { session: false }), reportsController.getReportsByStatus);

// Export the router to be used in other parts of the application
module.exports = router;
