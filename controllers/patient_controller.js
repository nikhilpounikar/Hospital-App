const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");
const Patient = require("../models/Patient");
const Report = require('../models/Report');

module.exports.register = async function (req, res) {
  try {

    if (req.body.phoneNumber === undefined || req.body.phoneNumber === "") {
      return res.status(422).json({
        message: "Please Enter Phone Number",
      });
    }

    if (req.body.name === undefined || req.body.name === "") {
        return res.status(422).json({
          message: "Please Enter Name",
        });
    }

    let doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      // here jwt should be return
      return res.status(401).send("UnAuthorised");
    } else {

      let patient = await Patient.findOne({phoneNumber:req.body.phoneNumber});

      if(!patient){
        patient = await Patient.create(req.body);
      }

      return res.status(200).json({
        patient : patient.toJSON()
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Patient",
    });
  }
};

module.exports.createReport = async function (req, res) {
  try {
    console.log("creating report");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Doctor",
    });
  }
};

module.exports.getReports = async function (req, res) {
  try {
    console.log("fetching reports");
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Doctor",
    });
  }
};
