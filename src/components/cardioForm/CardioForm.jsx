import React from 'react'
import axios from '../../util/axiosConfig'
import { useState,useEffect} from 'react'

function Exercise ({exercise,setters}){
    if(exercise === "Walking" || exercise === "Running"){
        return (
            <>
                <div className="formItem">
                    <label>Distance (in miles): </label>
                    <input type="text" placeholder='Distance' onChange={e=> setters.setDistance(e.target.value)}/>
                </div>
                <div className="formItem">
                    <label>Duration (in mins): </label>
                    <input type="text" placeholder='Duration' onChange={e=> setters.setDuration(e.target.value)}/>
                </div>
            </>
        )
    }
    else if(exercise === "Treadmil"){
        return (
            <>
                <div className="formItem">
                    <label>Speed (in miles/hour): </label>
                    <input type="text" placeholder='Speed' onChange={e=> setters.setSpeed(e.target.value)}/>
                </div>
                <div className="formItem">
                    <label>Inclined: </label>
                    <select name="incline" id="incline" onChange={e=> setters.setIncline(e.target.value)}>
                        <option value="">Select</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="formItem">
                    <label>Duration (in mins): </label>
                    <input type="text" placeholder='Duration' onChange={e=> setters.setDuration(e.target.value)}/>
                </div>
            </>
        )
    }
    else if(exercise === "Stair Climber"){
        return (
            <>
                <div className="formItem">
                    <label>Stairs Climbed: </label>
                    <input type="text" placeholder='Stairs Climbed' onChange={e=> setters.setStairsClimbed(e.target.value)}/>
                </div>
                <div className="formItem">
                    <label>Duration (in mins): </label>
                    <input type="text" placeholder='Duration' onChange={e=> setters.setDuration(e.target.value)}/>
                </div>
            </>
        )
    }
    else if(exercise === "Stationary Bike"){
        return (
            <>
                <div className="formItem">
                    <label>Speed (in miles/hour): </label>
                    <input type="text" placeholder='Speed' onChange={e=> setters.setSpeed(e.target.value)}/>
                </div>
                <div className="formItem">
                    <label>Distance (in miles): </label>
                    <input type="text" placeholder='Distance' onChange={e=> setters.setDistance(e.target.value)}/>
                </div>
                <div className="formItem">
                    <label>Duration (in mins): </label>
                    <input type="text" placeholder='Duration' onChange={e=> setters.setDuration(e.target.value)}/>
                </div>
            </>
        )
    }
}

function CardioForm({setWorkout}) {
    const [exercise, setExercise] = useState("")
    const [distance, setDistance] = useState(0)
    const [duration, setDuration] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [incline, setIncline] = useState(false)
    const [stairsClimbed, setStairsClimbed] = useState(0)
    const [enums, setEnums] = useState({})
    const setters ={
        setDistance,
        setDuration,
        setSpeed,
        setIncline,
        setStairsClimbed
    }
    const workout = {
        type:"Cardio",
        exercise,
        distance,
        duration,
        speed,
        incline,
        stairsClimbed
    } 
    setWorkout(workout)
       
    useEffect(() => {
        const getEnums = async ()=>{
          try {
            const res = await axios.get('enums')
            setEnums(res.data)       
          } catch (error) {
            console.log(error)
          }
        }
        getEnums()
      }, [])
  return (
        <>
            <div className="formItem">
                <label>Exercise: </label>
                <select name="exercise" onChange={e=> setExercise(e.target.value)}>
                    <option>Select</option>
                {
                    enums.cardioExercise && enums.cardioExercise.map((item) => <option>{item}</option>)
                }
                </select>
            </div>
            <Exercise exercise={exercise} setters={setters}/>
        </>
  )
}

export default CardioForm