const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/flipkart-clone',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(
    ()=>console.log("MongoDB connected")
).catch(err => console.log(err))

// Basic Route
// app.get('/', (req,res) =>{
//     res.send('Connected to server')
// })

// Routers from routes folder

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/order');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`))