const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Patient=new Schema({
    HPN:{type:String},
    Sex:{type:String},
    Height:{type:Number},
    Weight:{type:Number},
    Age:{type:Number},
    Contact:{type:Number},
    county:{type:String},
    district:{type:String},
    location:{type:String},
    contact:{type:String},
    relationship:{type:String},
    location:{type:String},
    contact:{type:Number},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

},
{timestamps:true}
);
module.exports=mongoose.model('Patient',Patient)