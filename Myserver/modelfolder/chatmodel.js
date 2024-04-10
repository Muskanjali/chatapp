const mongoose=require("mongoose");
const chatSchema=new mongoose.schema(
    {members:Array,},
    {TimeStamp:true,},
);
const chatModel=mongoose.model("Chat",chatSchema);
module.exports= chatModel;