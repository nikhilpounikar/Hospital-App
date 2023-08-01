const mongoose = require("mongoose");
//const AVATAR_PATH = path.join("uploads/users/avatars");

const doctorSchema = new mongoose.Schema(
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



const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
