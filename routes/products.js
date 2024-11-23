const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create a new product
router.post('/', async(req,res) => {
    try{
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)
    }
})

// Get All products
router.get('/',async(req,res) => {
    try{
        const products = await Product.find();
        res.status(200).send(products);
    }catch(e){
        res.status(400).send(e)
    }
});

// get a product by ID
router.get('/:id', async(req,res) => {
    try{
        const product = await Product.findById(req.params.id);
        if(product){
            res.status(200).send(product);
        }else{
            res.status(404).send({message:'product not found'})
        }
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;