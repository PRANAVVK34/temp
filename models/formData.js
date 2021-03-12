const mongoose= require('mongoose');

const formDataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    }
})
//  module.exports= mongoose.models.formData || mongoose.model('formData',formDataSchema)
module.exports= mongoose.model('formData',formDataSchema)