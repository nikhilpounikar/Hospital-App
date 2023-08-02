const Report = require("../models/Report");
const Patient = require("../models/Patient");

module.exports.getReportsByStatus = async function (req, res) {
  try {
    if (req.params.status === undefined || req.params.status === "") {
      return res.status(422).json({
        message: "Please Select Correct Status",
      });
    }

    let response = await Report.find({ status: req.params.status }).populate(
      "patient"
    );

    console.log(response);

    // here jwt should be return
    return res.status(200).json({
        response
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Doctor",
    });
  }
};
