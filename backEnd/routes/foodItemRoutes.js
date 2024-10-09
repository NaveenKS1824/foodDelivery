const express = require('express');
const { getItems, createItems } = require('../controller/foodItemController');
const routes = express.Router();

routes.get('/getItems',getItems);
routes.post('/postItem',createItems);

module.exports = routes;