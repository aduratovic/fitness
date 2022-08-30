const router = require('express').Router()
const {enums} = require('./../global')

//get enums
router.get('/', async (req,res)=>{
    
    try {
        res.status(201).json(enums)
    } catch (error) {
        res.status(500).json(error)
    }    
})

module.exports = router 