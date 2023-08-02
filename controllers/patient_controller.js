const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");
const Report = require("../models/Report");

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

    let patient = await Patient.findOne({ phoneNumber: req.body.phoneNumber });

    if (!patient) {
      patient = await Patient.create(req.body);
    }

    return res.status(200).json({
      patient: patient.toJSON(),
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Patient",
    });
  }
};

module.exports.createReport = async function (req, res) {
  try {
    let patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(422).json({
        message: "Patient Not Found",
      });
    }

    let report = req.body;
    report.date = new Date();
    report = await Report.create(report);

    if (report) {
      patient.reports.push(report.id);
      patient.save();
    }

    return res.status(200).json(report);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Creating Report",
    });
  }
};

module.exports.getReports = async function (req, res) {
  try {
    let patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(422).json({
        message: "Patient Not Found",
      });
    }
 
    let reportIds = patient.reports;
    console.log(reportIds);
    let reports = await Report.findById(reportIds);

    return res.status(200).json(reports);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Getting Reports",
    });
  }
};
