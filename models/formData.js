import mongoose from 'mongoose';

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
 export default mongoose.models.formData || mongoose.model('formData',formDataSchema)
