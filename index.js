const cookieParser = require("cookie-parser");
const express = require("express");

// Create Express application
const app = express();

// Set the port for the server to listen on
const port = 8000;
const db = require("./config/mongoose");

const session = require("express-session");
const passport = require('passport');
const passportJwt = require("./config/passport_jwt");
// const MongoStore = require('connect-mongodb-session')(session)
const MongoStore = require('connect-mongo');
// Use the cookie-parser middleware to parse cookies from the request
app.use(cookieParser());
// Use the express.urlencoded middleware to parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// Set up session handling using express-session middleware
app.use(
  session({
    name: "Hospital App", // The name of the session cookie
    secret: "monogConnection", // Secret used to sign the session ID cookie
    saveUninitialized: false, // Don't save uninitialized sessions (sessions with no data)
    resave: false, // Don't save the session if it hasn't been modified
    cookie: {
      maxAge: 1000 * 60 * 100, // The maximum age (in milliseconds) of the session cookie
    },
    // store: new MongoStore(
    //   {
    //     mongooseConnection: db.connection, // MongoDB connection to use for session store
    //     autoRemove: "disable", // Disable automatic removal of expired sessions
    //   },
    //   function (err) {
    //     console.log(err || "connect-mongodb setup ok");
    //   }
    // ),

    store: MongoStore.create({
      // mongoUrl: 'mongodb+srv://nikhilpounikar:1IWKLK3KdLBb2X9U@cluster0.sbronh6.mongodb.net/employee_review_db?retryWrites=true&w=majority',
      mongoUrl: 'mongodb+srv://whiteWolff:praduman@cluster0.an8uy3k.mongodb.net/employee_review_db?retryWrites=true&w=majority',
      autoRemove: 'disabled'
  },
      (err) => {
          console.log(err || 'connect-mongo setup ok');
      }
  )
  })
);

// Initialize passport for authentication
app.use(passport.initialize());
// Use passport session middleware to persist login sessions
app.use(passport.session());

// Use the routes defined in the index_route.js file for handling requests at the root path ("/")
app.use("/", require("./routes/index_route"));

// Start the server and listen on the specified port
app.listen(port, function (err) {
  if (err) {
    console.log("Error while starting an application: ", err);
    return;
  }
  console.log("Server Started on port:", port);
});
