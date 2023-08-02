// Import the required mongoose module
const mongoose = require("mongoose");

// Define the patientSchema for the Patient model
const patientSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true, // PhoneNumber is a required field
    },
    name: {
      type: String,
      required: true, // Name is a required field
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report", // This creates a reference to the "Report" model for the "reports" array
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the document
  }
);

// Create the Patient model using the patientSchema
const Patient = mongoose.model("Patient", patientSchema);

// Export the Patient model to be used in other parts of the application
module.exports = Patient;
