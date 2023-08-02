const mongoose = require("mongoose");
//const AVATAR_PATH = path.join("uploads/users/avatars");

const reportSchema = new mongoose.Schema(
  {
    // createdBy:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Doctor"
    // },
    status: {
      type: String,
      enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit'],
      require: true,
    },
    patient: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    
    // date:{
    //     type:Date,
    //     require:true
    // }
  },
  {
    timestamps: true,
  }
);



const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
