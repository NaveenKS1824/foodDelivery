const mongoose = require('mongoose');
const {v4:uuidv4}=require('uuid');

const Schema = new mongoose.Schema({
    u_id:{
        type:String,
        default:uuidv4,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
       type:String,
       required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    image:{
        type:[String],
        required:true,
    },
    rating:{
        rate:Number,
        count:Number,
    },
    id:{
        type:Number
    },
    avail:{
        type:String
    }
})

const foodModel = new mongoose.model('FoodItems',Schema);
module.exports = foodModel;