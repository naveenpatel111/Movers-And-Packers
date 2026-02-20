import "../models/connection.js";
import rs from "randomstring";
import url from 'url'
import path from 'path'
//to link category model
import CategorySchemaModel from "../models/categorySchemaModel.js";



export const save=async (req,res)=>{
 var Category=await CategorySchemaModel.find();
 var l=Category.length;
 var _id=l==0?1:Category[l-1]._id+1;
      
 try{

     if(!req.files||!req.files.caticon)
    {
        res.status(404).json({"status":false,"message":"Category icon is required"});
        return;
    }
        const caticon = req.files.caticon;
        const caticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name; 
        var cDetails={...req.body,"_id":_id,"caticonnm":caticonnm,"info":Date()};
      console.log(cDetails)
    await CategorySchemaModel.create(cDetails);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
       const uploadpath = path.join(__dirname,'../../UI/public/assets/uploads/caticons',caticonnm);
       await caticon.mv(uploadpath);
       res.status(200).json({"status":true}); 
 }catch(error){
  console.log(error);
    res.status(500).json({"status":false});        
 };
};

export const fetch=async(req,res)=>{
  // console.log("Hello")
  var cList=await CategorySchemaModel.find(req.query);
  if(cList.length!=0)
    res.status(200).json(cList);
  else
    res.status(404).json({"status":"Resource not found"});    
 };

