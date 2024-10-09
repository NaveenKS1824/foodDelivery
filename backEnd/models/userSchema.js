const mongoose = require('mongoose');
const { uuid } = require('uuidv4');
const bcrypt= require('bcrypt');

const Schema = new mongoose.Schema({
    u_id:{
        type:String,
        default:uuid,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

Schema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next()
})

const UserModel = new mongoose.model("User",Schema);
module.exports = UserModel;