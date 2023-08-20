// Import the required mongoose module
const mongoose = require("mongoose");

// Define the reportSchema for the Report model
const reportSchema = new mongoose.Schema(
  {
   
    status: {
      type: String,
      enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'], // Status field can only have values from this enum
      required: true, // Status is a required field
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient", // This creates a reference to the "Patient" model for the "patient" field
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor", // This creates a reference to the "Patient" model for the "patient" field
    },
   
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the document
  }
);

// Create the Report model using the reportSchema
const Report = mongoose.model("Report", reportSchema);

// Export the Report model to be used in other parts of the application
module.exports = Report;
