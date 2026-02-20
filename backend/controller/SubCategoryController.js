import "../models/connection.js";
import rs from "randomstring";
import url from 'url'
import path from 'path'
//to link category model
import SubCategorySchemaModel from "../models/SubCategorySchemaModel.js";




export const save=async (req,res)=>{
 var SubCategory=await SubCategorySchemaModel.find();
 var l=SubCategory.length;
 var _id=l==0?1:SubCategory[l-1]._id+1;
      
 try{

     if(!req.files||!req.files.caticon)
    {
        res.status(404).json({"status":false,"message":"Category icon is required"});
        return;
    }
    
     const caticon = req.files.caticon;
    const subcaticonnm = rs.generate()+"-"+Date.now()+"-"+caticon.name; 
    let scDetails  = {...req.body,"subcaticonnm":subcaticonnm,"_id":_id};
    //console.log(cDetails);
    await SubCategorySchemaModel.create(scDetails);
    console.log(scDetails);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const uploadpath = path.join(__dirname,'../../UI/public/assets/uploads/subcaticons',subcaticonnm);
    await caticon.mv(uploadpath);
    res.status(200).json({"status":true}); 
}
catch(err)
{
    console.log(err);
    res.status(500).json({"status":false});
}
};
export const fetch=async(req,res)=>{
  
  var scList=await SubCategorySchemaModel.find(req.query);
  console.log(req.query);
  if(scList.length!=0)
    res.status(200).json(scList);
  else
    res.status(404).json({"status":"Resource not found"});    
 };

