import './addExercise.css'
import axios from '../../util/axiosConfig'
import { useEffect } from 'react'
import { useState } from 'react'
import WeightTrainingForm from '../weightTrainingForm/WeightTrainingForm'
import React from 'react'
import { useRef } from 'react'

function AddExercise({currentWorkoutType}) {
  const [type, setType] = useState(currentWorkoutType)
  // const [weightTrainingFormData, setWeightTrainingFormData] = useState({})
  const weightTrainingRef = useRef(null)
  const [enums, setEnums] = useState({})
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
  console.log(weightTrainingRef.current)
  return (
    <div className='addExercise'>
        <div className='latest'>
        <div className="name">
            Fitness Tracker
        </div>
        <div className="info">
            <span className="title">Add Exercise</span>
            <div className="exercise-form">
              <form>
                <label>Type: </label>
                <select name="type" onChange={e=> setType(e.target.value)}>
                  {
                    currentWorkoutType ? <option selected="selected">{currentWorkoutType}</option>:
                    enums.type && enums.type.map((item) => <option>{item}</option>)
                  }
                </select>
                { type === "Weight Training" && <WeightTrainingForm ref={weightTrainingRef}/>}
                {}
              </form>
            </div>
            <div className="buttons">
                <button className="continue-workout-button">Complete</button>
                <button className="new-workout-button">Add Exercise</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddExercise