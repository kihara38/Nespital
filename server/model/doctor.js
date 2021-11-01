const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Doctor=new Schema({
    doctorId:{type:String},
    Specialization:{type:String},
    Disease:{type:String},
    Consotation:{type:String},
    experience:[{
        title:{type:String, required:true},
        company:{type:String, required:true},
        location:{type:String},
        from:{type:Date, required:true},
        to:{type:Date},
        current:{type:Boolean, default:true},
    }],
    education:[{
        school:{type:String, required:true},
        degree:{type:String, required:true},
        fieldofstudy:{type:String},
        from:{type:Date, required:true},
        to:{type:Date},
        current:{type:Boolean, default:true},
    }],
    social:{
        google:{
            type:String
        },
        facebook:{
            type:String
        },
        twitter:{
            type:String
        },
        linkedin:{
            type:String
        },
        instagram:{
            type:String
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});
module.export=mongoose.model('Doctor',Doctor)