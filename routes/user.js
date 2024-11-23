const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();
// Register
router.post('/register',async(req,res) =>{
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch(e){
        res.status(400).send(e)
    }
})
// Login
router.post('/login', async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if(!user || !(await user.comparePassword(req.body.password))){
            return res.status(401).send({error:'Invalid Creds'});
        }
        const token = jwt.sign({id:user._id, isAdmin: user.isAdmin}, 'jwt_secret', {expiresIn:'1h'});
        res.send({token})
    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports = router;