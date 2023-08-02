// getting dependencies
const express = require('express');

// getting router instance
const router = express.Router();

console.log("Router loaded");

router.use('/doctor',require('./doctor_route'));
router.use('/patients',require('./patient_route'));
//router.get('/employee',require('./employee_route'));
//router.post("/update/:id", passport.checkAuthentication, userController.update);
module.exports = router;