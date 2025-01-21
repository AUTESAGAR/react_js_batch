import mongoose from "mongoose";

const mobileSchema = new mongoose.Schema({
    name : {type:String,required:true},
    banner : {type:String,required:true},
    price : {type:Number,required:true},
    color : {type:String,required:true},
    createAt : {type:Date,default:Date.now()},
});

export const mobileHandle = mongoose.model("mobile",mobileSchema);