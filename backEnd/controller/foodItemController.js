const foodModel = require('../models/foodSchema');
const userSchema = require('../models/userSchema');

exports.createItems = async(req,res)=>{
    const{title,description,price,category,image,rating,id,avail}= req.body;
    try{
        const item = new foodModel({
            title:title,
            description:description,
            price:price,
            category:category,
            image:image,
            rating:rating,
            id:id,  
            avail:avail
        });
        await item.save();
        res.status(201).json({message:"Product is add to the Menu"});
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
    
}

exports.getItems = async(req,res)=>{
    try{
        const item = await foodModel.find();
        res.send(item);
    }
    catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
