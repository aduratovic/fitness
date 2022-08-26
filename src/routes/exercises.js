const router = require('express').Router()
const Exercise = require('../models/Exercise')

// create exercise
router.post('/:id', async (req,res)=>{
    try {
        const d = new Date()
        const newExercise = new Exercise({
            userId: req.params.id,
            type: req.body.type,
            weightTrainingType: req.body.weightTrainingType,
            name: req.body.name,
            exercise: req.body.exercise,
            duration: req.body.duration,
            distance: req.body.distance,
            speed: req.body.speed,
            incline:req.body.incline,
            stairsClimbed:req.body.stairsClimbed,
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
router.get('/:userId', async (req,res)=>{
    try {
        const exercises = await Exercise.find({userId:req.params.userId}).sort({createdAt:-1})
        res.status(200).json(exercises)
    } catch (error) {
        res.status(500).json(error)
    }

})

//get latest activity
router.get('/latest/:userId', async (req,res)=>{
    try {
        const exercises = await Exercise.find({userId:req.params.userId}).sort({createdAt:-1})
        const type = exercises[0].type
        const d = exercises[0].createdAt.getDate()

        let exercise
        if(type === "Cardio")
        {    
            exercise = await Exercise.aggregate([
                {
                    $match : {type:"Cardio", userId: req.params.userId, date: d}
                },
                {
                    $group : { 
                        _id: null ,
                        duration: {$sum:"$duration"},
                        totalExersice : {$sum:1}
                    }
                }
            ])
        }
        else if(type === "Resistance (machines)"){
            exercise = await Exercise.aggregate([
                {
                    $match : {type:"Resistance (machines)", userId: req.params.userId,date:d}
                },
                {
                    $group : { 
                        _id: null ,
                        weights: { $sum: "$weights" }, 
                        sets: { $sum: "$sets" }, 
                        reps: { $sum: "$reps" },
                        totalExersice : {$sum:1}
                    }
                }
            ])
        }
        else if(type === "Weight Training"){
            exercise = await Exercise.aggregate([
                {
                    $match : {type:"Weight Training", userId: req.params.userId,date:d}
                },
                {
                    $group : { 
                        _id: null ,
                        weights: { $sum: "$weights" }, 
                        sets: { $sum: "$sets" }, 
                        reps: { $sum: "$reps" },
                        totalExersice : {$sum:1}
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
router.patch('/:exerciseId', async (req,res)=>{
    try {
        const updateExercise = await Exercise.findByIdAndUpdate(req.params.exerciseId,{$set : req.body},{new:true})
        res.status(200).json(updateExercise)
    } catch (error) {
        res.status(500).json(error)
    }
})

//delete exercise
router.delete('/:exerciseId', async (req,res)=>{
    try {
        await Exercise.findByIdAndDelete(req.params.exerciseId)
        res.status(200).json('Exercise Deleted')
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router