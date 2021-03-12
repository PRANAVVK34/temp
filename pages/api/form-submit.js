import initDB from '../../helpers/initDB';
import formData from '../../models/formData';

  initDB()

export default async function handler(req,res){
  const {method} = req
  res.send("thank you")
  if(method==='POST'){
    await formData.create(
    req.body
    
  ) .then(res=>{
    console.log(res);
  })
  }
}