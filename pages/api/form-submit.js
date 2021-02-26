import initDB from '../../helpers/initDB';
import formData from '../../models/formData';


export default async function handler(req,res){
  await initDB()
  console.log("form data called");
  const {method} = req
  console.log(req.body);
  res.send("thank you")
  if(method==='POST'){
    await formData.create(
    req.body
    
  ) .then(res=>{
    console.log(res);
  })
  }
}