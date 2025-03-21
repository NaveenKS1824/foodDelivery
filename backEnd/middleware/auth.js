const jwt = require('jsonwebtoken');
require("dotenv").config();

const auth = async(req,res,next)=>{
    const token = req.header("Authorization").split(" ")[1];
    if(!token){
        return res.status(401).send({message:"Access denied. No token provided."});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        return res.status(400).send({message:"Invalid token."});
    }
}

module.exports = auth;