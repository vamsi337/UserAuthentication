const express= require ('express');
const router= require('./routes/user.route')
const dotenv = require('dotenv');

dotenv.config();

const app= express();
app.use('/app', router); // SIGNUP ROUTER

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})