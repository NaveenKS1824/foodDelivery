const mongoose = require('mongoose');
const express = require("express");
const app = express();
const userRoutes = require('./routes/userRoutes');
const foodItemRoutes = require('./routes/foodItemRoutes');
const cartRoutes = require('./routes/cartRoutes');

mongoose.connect(
    "mongodb://localhost:27017/foodApplication",
).then(()=>{
    console.log("Connected to the DataBase");
}).catch((err)=>{
    console.log("Server Error",err);
})

app.use(express.json());
app.use('/api',userRoutes);
app.use('/api/items',foodItemRoutes);
app.use('/api/cart',cartRoutes);

app.listen(3005,()=>{
    console.log("Server is running in the port 3005");
})