const express= require ('express');
const dotenv = require('dotenv');

dotenv.config();

const app= express();

app.get('/app', (req,res)=>{
    res.send('Get route')
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})