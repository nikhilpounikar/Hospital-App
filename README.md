# Hospital App

# npm init ==> initialise packge.json
# npm install express ==> install express and node module folder
# npm install cookie-parser ==> to parse the cookies
# npm install express-session ===> Express Session provides a simple and convenient way to handle sessions 
# npm install mongodb ===> MongoDB Node.js driver
# npm install mongo-connect ===> standard library in the context of MongoDB and Node.js 
# or npm i connect-mongodb-session 
# npm install 
# npm install mongoose ===> Mongoose is a popular object data modeling (ODM) library for Node.js and MongoDB.
# npm install cookie-parser ===> to parse cookies
# npm install passport-jwt ===> to jwt strategy
# npm install passport ===> to authentication user 
# npm install jsonwebtoken ===>


### Description

The full-stack application you're envisioning is designed to facilitate authorized doctors' interactions with patient data, health reports, and tracking over time. The application will consist of backend components, allowing doctors to securely log in, manage patient information, view health reports, and monitor patient health trends.


### Tech Stack

Node , Express, Mongodb 

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        npm start || nodemon index.js
   ````

 

### Folder Structure

```
HOSPITAL App
    |
    |--->config---->|--->mongoose.js
    |               |--->passport-local.js
    |
    |                  |-->doctor_controller.js
    |--->controllers-->|-->patient_controller.js
    |                  |-->reports_controller.js
    |         
    |
    |               |-->Doctor.js
    |--->models---->|-->Patient.js
    |               |-->Report.js
    |
    |              
    |               |-->doctor_route.js
    |--->routes---->|-->index_route.js
    |               |-->patient_route.js
    |               |-->report_route.js
    |
    |-->node_modules
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
# Postman Collection (Hospital).json

this is postman collection please import this file in postman and create two globla variabls say LOCALHOST, patient_id and doctor_id make use of these variable to 
use apis.

LOCALHOST ---> this defines the server 
patient_id ---> variable for patient_id after creation of patient.
doctor_id  ---> for doctor document id reference