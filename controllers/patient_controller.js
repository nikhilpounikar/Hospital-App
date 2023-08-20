// Import required models
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Report = require("../models/Report");

// Function to register a new patient
module.exports.register = async function (req, res) {
  try {
    // Check if phoneNumber and name are provided in the request body
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

    // Check if a patient with the same phoneNumber already exists
    let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });

    if (!patient) {
      // If the patient does not exist, create a new one
      patient = await Patient.create(req.body);
    }

    return res.status(200).json({
      patient: patient.toJSON(), // Return the registered patient data in the response
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Patient",
    });
  }
};

// Function to create a new report for a patient
module.exports.createReport = async function (req, res) {
  try {
    // Find the patient by ID using the parameter from the URL
    let patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(422).json({
        message: "Patient Not Found",
      });
    }

    // Prepare the report data from the request body and set the date to the current date
    let report = req.body;
    report.date = new Date();

    // Create the new report
    report = await Report.create(report);

    if (report) {
      // If the report is created successfully, add its ID to the patient's reports array and save the patient
      patient.reports.push(report.id);
      patient.save();
    }

    return res.status(200).json(report); // Return the created report data in the response
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Creating Report",
    });
  }
};

// Function to get all reports for a patient
module.exports.getReports = async function (req, res) {
  try {
    // Find the patient by ID using the parameter from the URL
    let patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(422).json({
        message: "Patient Not Found",
      });
    }

    let reportIds = patient.reports; // Get the array of report IDs from the patient's reports field
    console.log(reportIds);

    // Find all reports with IDs in the reportIds array
    let reports = await Report.find({_id:{'$in':reportIds}});

    return res.status(200).json(reports); // Return the found reports data in the response
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Getting Reports",
    });
  }
};
