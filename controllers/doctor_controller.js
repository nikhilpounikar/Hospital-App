const Doctor = require("../models/Doctor");

module.exports.register = async function (req, res) {
  try {
    if (req.body.password !== req.body.confirm_password) {
      return   res.status(422).json({
        message:"Password and Confirm password does not match"
    });
    }

    let doctor = await Doctor.findOne({ userName: req.body.userName });

    if (!doctor) {
      await Doctor.create(req.body);

      console.log("Doctor Added Successfully");
      // here jwt should be return
      return this.createSession(req, res);
    } else {
        return res.status(403).json({
            message:"Doctor Already Exits"
        });
    }

  } catch (err) {
    return res.status(500).json({
        message:"Error Registering Doctor"
    });
  }
};

module.exports.login = async function (req, res) {
  
    try {

        let doctor =  await Doctor.findOne({userName:req.body.userName});

        if(doctor){

            if(doctor.password == req.body.password){
                // return jwt
                return res.status(200).json(doctor);
            }else{
                return res.status(401).json({ message: 'Invalid UserName or password' });
            }

        }else{
            return res.status(422).json({
                message:"Invalid Username or Password"
            });
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message:"Internal Server Exception"});
    }
};
