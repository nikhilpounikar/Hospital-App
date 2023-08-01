// getting dependencies
const express = require('express');

// getting router instance
const router = express.Router();

console.log("Router loaded");

router.get('/doctor',require('./doctor_route'));
//router.get('/employee',require('./employee_route'));
router.post("/update/:id", passport.checkAuthentication, userController.update);
module.exports = router;