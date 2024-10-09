const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    user_id:String,
    Items:[{
        Item_id:{
            type:String,
            required:true,
        },
        quantity:{
           type:Number, 
        }
    }],
});

const CartModel = mongoose.model('Cart',Schema);
module.exports = CartModel;