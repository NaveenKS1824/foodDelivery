const express = require('express');
const { getCart, createCart, deleteCart } = require('../controller/cartController');
const auth = require('../middleware/auth');
const routes = express.Router();

routes.get('/getCart',auth,getCart);
routes.post('/postCart',auth,createCart);
routes.post('/deleteCart/:id',auth,deleteCart);

module.exports = routes;