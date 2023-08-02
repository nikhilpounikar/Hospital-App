// getting dependencies
const express = require('express');
const passport = require('passport');

// getting router instance
const router = express.Router();
const patientController = require('../controllers/patient_controller');

console.log('in patient route')
router.post('/register',passport.authenticate('jwt',{session:false}),patientController.register);
router.post('/:id/create_report',passport.authenticate('jwt',{session:false}),patientController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}),patientController.getReports);

module.exports = router;