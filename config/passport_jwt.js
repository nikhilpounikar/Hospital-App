const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const Doctor = require('../models/Doctor');

var opts ={

    jwtFromRequest : extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'hospital_key',
}

passport.use(new jwtStrategy(opts, async function(jwt_payload, done) {

    try {
        let doctor = await Doctor.findOne({id: jwt_payload.sub});

        if(!doctor){
            return done(null, false);
        }

        return done(null, doctor);
       
    } catch (error) {
        console.log("Error in passport jwt");
        return done(error,false);
    }
   
}));

module.exports = passport;