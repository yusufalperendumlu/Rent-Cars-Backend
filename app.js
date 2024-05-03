const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 3000;


const userRoutes = require('./src/routers/userRoutes');
const cityRoutes = require('./src/routers/cityRoutes');
const rentalRoutes = require('./src/routers/rentalRoutes');
const carsRoutes = require('./src/routers/carsRoutes');


const app = express();
app.use(express.json());


app.get('/', async (req, res) => {
    res.status(200).json('Hello World!');
})


app.use('/api/user', userRoutes);
app.use('/api/city', cityRoutes);
app.use('/api/rental', rentalRoutes);
app.use('/api/cars', carsRoutes);



app.listen(port, () => {
    console.log(`http://localhost:${process.env.PORT} is running`);
})

