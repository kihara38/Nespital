const Express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const App = Express();

const User = require("./routes/api/user");
const patient = require("./routes/api/patient");
const doctor = require("./routes/api/doctor");
//const appointment = require("./routes/api/appointment");
App.use(cors({ extended: false }));
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));

//connect to mongo db
const DB = require("./config/keys").mongoURI;
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongo db");
  })

  .catch((err) => console.log(err));

//passpo(et middleware
App.use(passport.initialize());

//passport config
require("./config/passport")(passport);

//use routes
App.use("/api/user", User);
App.use("/api/patient", patient);
App.use("/api/doctor", doctor);

App.use(Express.static(__dirname + "/public"));
App.use("/uploads", Express.static("uploads"));

const PORT = process.env.PORT || 5002;
App.listen(PORT, () => {
  console.log("listening to port 5002");
});
