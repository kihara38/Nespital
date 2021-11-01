const Express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');

const App=Express();

const user = require("./routes/api/user");
const patient=require("./routes/api/patient");
const doctor=require("./routes/api/doctor");
App.use(cors({ extended: false }));
App.use(Express.json());

//connect to mongo db
const DB=require('./config/keys').mongoURI;
mongoose.connect(DB, { useNewUrlParser: true})
.then (()=>{
    console.log('connected to mongo db')
})

.catch((err)=>console.log (err));

App.use("/api/user", user);
App.use("./api/patient", patient);
App.use("./api/doctor", doctor);

App.get('/',(req,res)=>res.send('Nespital activated'));
//port
const PORT=process.env.PORT||5002;
App.listen(PORT,()=>{console.log('listening to port 5002')});