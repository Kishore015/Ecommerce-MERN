const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create a new order
router.post('/', async(req,res)=>{
    try{
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    }catch(e){
        res.status(400).send(e)
    }
})
// Get all orders
router.get('/', async(req,res)=>{
    try{
        const orders = await Order.find().populate('user', 'name email');
        res.status(200).send(orders)
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;