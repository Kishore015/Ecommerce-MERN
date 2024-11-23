const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    orderItems : [
        {
            product: {type:mongoose.Schema.Types.ObjectId, ref:'Product', required:true},
            qty: {type: Number, required:true}
        }
    ],
    shippingAddress : {
        address : {type:String, required:true},
        city: {type:String, required:true},
        postalCode: {type:String, required:true},
        country: {type:String, required:true}
    },
    paymentMethod:{type:String,required:true},
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address: {type:String}
    },
    itemsPrice:{type:Number,required:true},
    taxprice:{type:Number,required:true},
    shippingPrice:{type:Number, required:true},
    totalPrice:{type:Number,required:true},
    isPaid:{type:Boolean, default:false},
    paidAt: {type:Date},
    isDelivered : {type:Boolean, default:false},
    deliveredAt : {type:Date}
})

module.exports = mongoose.model('Order', orderSchema)