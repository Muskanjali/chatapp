//express activate
const express = require("express");
const app = express();//object creation

//additional functionality .use
app.use(express.json());

//same in cors activation
//cors establish communication from Frontend
const cors = require("cors");
//additional functionality 
app.use(cors());

//mongoose activation
const uri = process.env.myMDBstring  //.env variable initialize
const mongoose = require("mongoose");
mongoose.connect(uri, {
    useNewUrlParser:true,
    UnifieldTopology:true,
}).then(() => console.log("DB Connected"))
    .catch((error) => console.log("DB not connected:", error.message));
    //.env configuration
    const configuration = require("dotenv").config();
//server creation
const PORT = 5000;
app.listen(PORT, (req, res) => {  //it will listen to client request and give response
    console.log(`server is running on port ${PORT}`)
}
)
//importing Router
const Myroute=require("./Router/Myroute");
const router = require("./Router/chatroute");
app.use("/api/user",Myroute);


