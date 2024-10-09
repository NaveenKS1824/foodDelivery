const UserModel = require('../models/userSchema');
const bcrypt= require('bcrypt');
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    const {name,email,password}= req.body;
    const find = await UserModel.findOne({email});
    if(!find){
        const newUser = new UserModel({
            name,
            email,
            password
        });
        await newUser.save();
        res.status(201).json({message:"User Created Successfully"});
    }
    else{
        res.status(400).json({message:"Email is already exist"});
    }
}

exports.login = async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user = await UserModel.findOne({email});
        if(!user){
            res.status(400).json({message:"Invalid Email or Password"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(400).json({message:"Invalid Password"});
        }
        const token = jwt.sign({user_id:user.u_id},"secret_token",{
            expiresIn:'1h',
        });
        res.status(200).json(token);
        
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}