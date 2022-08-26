const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js")

//register
router.post('/register', async (req,res)=>{
    
    try {
        const newUser = new User({
            userName : req.body.userName,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        })
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }    
})

//login
router.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) 
            res.status(401).json('Wrong password and email')
        else{
            const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            if(originalPassword !== req.body.password)
                res.status(401).json('Wrong password and email')
            else{
                const {password, ...info} = user._doc
                res.json({...info})
        }}
        
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router 