import mongoose from 'mongoose';
import {URI} from '../next.config';

const initDB=()=>{
    if(mongoose.connections[0].readyState){
        return;
    }
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on("connected",()=>{
        console.log("connected to database");
    })
    mongoose.connection.on("error",(err)=>{
        console.log("connection error",err);
    })
}

export default initDB;