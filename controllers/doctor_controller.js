// Import required modules and models
const Doctor = require("../models/Doctor");
const jwt = require("jsonwebtoken");

// Function to register a new doctor
module.exports.register = async function (req, res) {
  try {
    // Check if the password and confirmPassword match
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(422).json({
        message: "Password and Confirm password do not match",
      });
    }

    // Check if a doctor with the same username already exists
    let doctor = await Doctor.findOne({ email: req.body.email });

    if (!doctor) {
      // If the doctor does not exist, create a new one
      doctor = await Doctor.create(req.body);

      console.log("Doctor Added Successfully");
      // Return a JSON web token (JWT) after successfully registering the doctor
      return res.status(200).json({
        message: "Session Created.",
        data: {
          token: jwt.sign(doctor.toJSON(), "hospital_key", { expiresIn: "1000000" }), // Sign the JWT with a secret key and set an expiry time
        },
      });
    } else {
      // If a doctor with the same username exists, return an error
      return res.status(403).json({
        message: "Doctor Already Exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Error Registering Doctor",
    });
  }
};

// Function to log in a doctor
module.exports.login = async function (req, res) {
  try {
    // Find the doctor based on the provided username
    let doctor = await Doctor.findOne({ email: req.body.email });

    if (doctor) {
      // If the doctor is found, check if the password matches
      if (doctor.password == req.body.password) {
        // Return a JSON web token (JWT) after successful login
        return res.status(200).json({
          message: "Session Created.",
          data: {
            token: jwt.sign(doctor.toJSON(), "hospital_key", { expiresIn: "1000000" }), // Sign the JWT with a secret key and set an expiry time
          },
        });
      } else {
        // If the password does not match, return an error
        return res
          .status(401)
          .json({ message: "Invalid UserName or Password" });
      }
    } else {
      // If the doctor is not found, return an error
      return res.status(422).json({
        message: "Invalid Username or Password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Exception" });
  }
};
