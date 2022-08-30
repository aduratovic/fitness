import './addExercise.css'
import axios from '../../util/axiosConfig'
import { useEffect } from 'react'
import { useState } from 'react'
import WeightTrainingForm from '../weightTrainingForm/WeightTrainingForm'
import CardioForm from '../cardioForm/CardioForm'
import React from 'react'
import ResistanceForm from '../resistanceForm/ResistanceForm'


function AddExercise({user,currentWorkoutType}) {
  const [type, setType] = useState(currentWorkoutType)
  const [enums, setEnums] = useState({})
  let workout

  //getting enums
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

  //setting my local variable after fetching data from child component
  const setWorkout = (data)=>{
    workout = data
  }
  
  // adding exercise to database
  const adExercise = async ()=>{
    console.log(workout)
    await axios.post('exercises/'+user._id,workout)
    window.location.reload()
  }
  
  return (
    <div className='addExercise'>
        <div className='main'>
          <div className="name">
            FIT-LOG
          </div>
          <div className="card">
              <span className="title">Add Exercise</span>
              <div className="exercise-form">
                <form>
                  <div className="formItem">
                    <label>Type: </label>
                    <select name="type" onChange={e=> setType(e.target.value)}>
                      {
                        currentWorkoutType ? <option selected="selected">{currentWorkoutType}</option>:
                        <>
                          <option>Select</option>
                         { enums.type && enums.type.map((item) => <option>{item}</option>)}
                        </>
                      }
                    </select>
                  </div>
                    { (type === "Weight Training" && <WeightTrainingForm setWorkout={setWorkout} />)||
                     (type === "Cardio" && <CardioForm setWorkout={setWorkout} />)||
                     (type === "Resistance (machines)" && <ResistanceForm setWorkout={setWorkout}/>)}
                </form>
              </div>
              <div className="buttons">
                  <button className="continue-workout-button" onClick={adExercise}>Complete</button>
                  <button className="new-workout-button" onClick={adExercise} >Add Exercise</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AddExercise