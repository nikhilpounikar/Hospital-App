// Import the required mongoose module
const mongoose = require("mongoose");

// Define the doctorSchema for the Doctor model
const doctorSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true, // Username is a required field
    },
    password: {
      type: String,
      required: true, // Password is a required field
    },
    name: {
      type: String,
      required: true, // Name is a required field
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the document
  }
);

// Create the Doctor model using the doctorSchema
const Doctor = mongoose.model("Doctor", doctorSchema);

// Export the Doctor model to be used in other parts of the application
module.exports = Doctor;
