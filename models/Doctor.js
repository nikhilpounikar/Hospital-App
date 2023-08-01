const mongoose = require("mongoose");
//const AVATAR_PATH = path.join("uploads/users/avatars");

const patientSchema = new mongoose.Schema(
  {
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);



const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
