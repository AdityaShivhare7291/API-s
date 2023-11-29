
import userModel from '../models/userModel.js';
export const register=async(req,res)=>{
    const { name, email, password } = req.body;
  try {
    const newuser = new userModel({ email, password, name: name });
    await newuser.save();
    res.json({ message: 'success'});
  } catch (error) {
    console.log('Error in register ' + error);
    res.status(500).send(error);
  }
}
export const userDetails=async(req,res)=>{
    try{
        const newuser=await userModel.find();
        res.json({userDetail:newuser});
    }catch(error)
    {
        console.log('Error'+error);
        res.status(500).send(error);
    }
}
export const updateuserdetails=async(req,res)=>{
    const {email,names}=req.body;    
    
     try{
        const newuser=await userModel.updateOne({ email:email}, { name:names });
        res.json({message:newuser});
        }catch(error)
        {   
        console.log('Error'+error);
        res.status(500).send(error);
        }
}