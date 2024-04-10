const express=require("express");
const router=express.Router();
router.get("/register",(req,res)=>{
    response.send("registration successful")
})

//controls, register ,login
const{register,login}=require("./controlfolder/controls");
router.post("./register",register);
router.post("./login",register);

 module.exports={register,login,router};