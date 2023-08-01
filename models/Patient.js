const mongoose = require("mongoose");
//const AVATAR_PATH = path.join("uploads/users/avatars");

const patientSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  {
    timestamps: true,
  }
);



const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
