const express= require('express');
const router = express.Router();

router.get('/signup', (req,res)=>{
    res.send('Enter ur Name, emaila nd password to register')
})

module.exports=router;