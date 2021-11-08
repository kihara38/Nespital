const mongoose=require('mongoose');
const Schema=mongoose.Schema

//create user schema
const User= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    avatar:{type:String},
    role:{
        type: String,
        enum:['admin', 'doctor', 'patient'],
        required: true
    }
},

{timestamps:true}
);

module.exports=mongoose.model("user", User)