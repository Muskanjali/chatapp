//bcrypt packages require password inn hashing or hidden
const bcrypt = require("bcrypt");
//validator  valiadte
const validator = require("validator");
//json webtoken require tokens
const jwt = require("jsonwebtoken");

// function for user registration
const UserRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    let user = await usermodel.findone({ email });
    if (user)//validation
        return res.status(400).JSON("user already exists");

    if (!name || !email || !password)
        return res.status(400).JSON("This field is required");

    if (!validator.isEmail(email))
        return res.status(400).JSON("email is required");

    if (!validator.isStrongPassword(password))
        return res.status(400).JSON("please enter your password");

    //for new user validation
        //user creation password encryption
    user = new usermodel({ name, email, password });
     //variable for store password digits
    const salt=await(bcrypt.genSalt(10));
    //to convert password number into hash or hidden
    user.password=await bcrypt.hash(user.password, salt);
    try{
        await(user.save);
    }
    catch(error){
        console.log(error);
        return res.status(500).send("Internal server error.");
    }

    //token create
    const CreateToken=(_id)=>{
        const jwtKey=process.env.Uid;
        return jwt.sign({_id}.jwtKey),
        {ExpireIn:"3d"}
    }
//token call
    const token=CreateToken(user_id);
    res.status(200).JSON({_id:user._id,name,email,password})

}