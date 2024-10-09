const CartModel = require('../models/cartSchema');
const foodModel = require('../models/foodSchema');
const UserModel = require('../models/userSchema');

exports.createCart = async(req,res)=>{
    const {Item_id,quantity}=req.body;
    const {user_id}=req.user;
    let user = await CartModel.findOne({user_id:user_id});
    try{
        
        if(!user){
            user = new CartModel({
                user_id:user_id,
                Items:[
                    {
                        Item_id:Item_id,
                        quantity:quantity
                    }
                ],
            })
        }
        else{
            const productIndex = user.Items.findIndex(
                (props)=>product_id==props.product_id
            )
            if(productIndex ==-1){
                user.Items.push({
                        Item_id:Item_id,
                        quantity:quantity,
                });
            }
            else{
                user.Items[productIndex].quantity=quantity;
            }
        }
        await user.save();
        res.status(201).json('Cart is added/Updated successfully');
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.getCart = async(req,res)=>{
    const {user_id}=req.user;
    try{
        const user = await UserModel.findOne({u_id:user_id});
        if(user){
            const cart = await CartModel.findOne({user_id:user_id});
            const Items = await foodModel.find();
            const list = cart.Items;
            const result = list.map((item)=>{
                const product = Items.find((props)=>props.u_id==item.Item_id);
                // console.log(product);
                return{
                    product_id:item.Item_id,
                    title:product.title,
                    price:product.price,
                    image:product.image,
                    quantity:item.quantity,
                }
            });
            res.status(200).json(result);
        }
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.deleteCart = async(req,res)=>{
    const {user_id}= req.user;
    try{
        const user = await UserModel.findOne({u_id:user_id});
        if(user){
            const {Item_id}=req.params.id;
            const cart = await CartModel.findOne({user_id});
            if(!cart){
                res.status(400).json("Cart not found");
            }
            else{
                const remaining = cart.Items.filter((item)=>(item.Item_id==Item_id));
                const update = await CartModel.findOneAndUpdate({user_id},{Items:remaining});
                res.status(200).json(remaining);
            }
        }
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}