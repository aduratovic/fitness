const router = require('express').Router()
const Exercise = require('../models/Exercise')

// create exercise
router.post('/:id', async (req,res)=>{
    try {
        const d = new Date()
        const newExercise = new Exercise({
            userId: req.params.id,
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            distance: req.body.distance,
            weights: req.body.weights,
            sets: req.body.sets,
            reps: req.body.reps,
            date: d.getDate()
        })
        const exercise = await newExercise.save()
        res.status(201).json(exercise)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all exercises
router.get('/:id', async (req,res)=>{
    try {
        const exercises = await Exercise.find({userId:req.params.id}).sort({date:-1})
        res.status(200).json(exercises)
    } catch (error) {
        res.status(500).json(error)
    }

})

//get latest activity
router.get('/latest/:id', async (req,res)=>{
    try {
        const exercises = await Exercise.find({userId:req.params.id}).sort({createdAt:-1})
        const type = exercises[0].type
        const d = exercises[0].createdAt.getDate()

        let exercise
        if(type === "cardio")
        {    
            exercise = await Exercise.aggregate([
                {
                    $match : {type:"cardio", userId: req.params.id, date: d}
                },
                {
                    $group : { 
                        _id: null , 
                        distance: { $sum: "$distance" }, 
                        duration: {$sum:"$duration"},
                        totalExercise : {$sum:1}
                    }
                }
            ])
        }
        else{
            exercise = await Exercise.aggregate([
                {
                    $match : {type:"resistance", userId: req.params.id,date:d}
                },
                {
                    $group : { 
                        _id: null ,
                        weights: { $sum: "$weights" }, 
                        sets: { $sum: "$sets" }, 
                        reps: { $sum: "$reps" }, 
                        duration: {$sum:"$duration"},
                        totalExercise : {$sum:1}
                    }
                }
            ])
        }
        res.status(200).json({...exercises[0]._doc,...exercise[0]})
    } catch (error) {
        res.status(500).json(error)
    }

})

//Update
router.patch('/:id', async (req,res)=>{
    try {
        const updateExercise = await Exercise.findByIdAndUpdate(req.params.id,{$set : req.body},{new:true})
        res.status(200).json(updateExercise)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete exercise
router.delete('/:id', async (req,res)=>{
    try {
        await Exercise.findByIdAndDelete(req.params.id)
        res.status(200).json('Exercise Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router