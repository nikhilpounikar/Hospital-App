// Import required models
const Report = require("../models/Report");
const Patient = require("../models/Patient");

// Function to get reports by status
module.exports.getReportsByStatus = async function (req, res) {
  try {
    // Check if the status parameter is provided in the request URL
    if (req.params.status === undefined || req.params.status === "") {
      return res.status(422).json({
        message: "Please Select Correct Status",
      });
    }

    // Find reports with the specified status and populate the "patient" field with patient data
    let response = await Report.find({ status: req.params.status }).populate(
      "patient"
    );

    console.log(response);

    // Return the found reports data in the response
    return res.status(200).json({
      response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Doctor",
    });
  }
};
