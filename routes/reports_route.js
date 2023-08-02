// getting dependencies
const express = require('express');
const passport = require('passport');

// getting router instance
const router = express.Router();
const reportsController = require('../controllers/reports_controller');

router.get('/:status',passport.authenticate('jwt',{session:false}),reportsController.getReportsByStatus);

module.exports = router;