import React from 'react'
import axios from '../../util/axiosConfig'
import { useState,useEffect } from 'react'


function Exercise ({name,enums}){
      if(name === "Shoulder"){
        return (<>{enums.resistanceSoulder.map((item) => <option>{item}</option>)}</>)
      }
      else if(name === "Bicep"){
        return (<>{enums.resistanceBicep.map((item) => <option>{item}</option>)}</>)
      }
      else if(name === "Tricep"){
        return (<>{enums.resistanceTricep.map((item) => <option>{item}</option>)}</>)
      }
      else if(name === "Chest"){
        return (<>{enums.resistanceChest.map((item) => <option>{item}</option>)}</>)
      }
      else if(name === "Back"){
        return (<>{enums.resistanceBack.map((item) => <option>{item}</option>)}</>)
      }
      else if(name === "Legs"){
        return (<>{enums.resistanceLeg.map((item) => <option>{item}</option>)}</>)
      }
}

function ResistanceForm({setWorkout}) {
    const [name, setName] = useState("")
    const [exercise, setExercise] = useState("")
    const [weights, setWeights] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")
    const [enums, setEnums] = useState({})
    const workout = {
        type:"Resistance (machines)",
        name,
        exercise,
        weights,
        sets,
        reps
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
                <label>Name: </label>
                <select name="name" onChange={e=> setName(e.target.value)}>
                    <option>Select</option>
                {
                    <>
                        {enums.name && enums.name.map((item) => <option>{item}</option>)}
                        <option>Legs</option>
                    </>
                }
                </select>
            </div>
            <div className="formItem">
                <label>Exercise: </label>
                <select name="exercise" onChange={e=> setExercise(e.target.value)}>
                    <option>Select</option>
                    <Exercise name={name} enums={enums}/>
                </select>
            </div>
            <div className="formItem">
                <label>Weights: </label>
                <input type="text" placeholder='Weights' onChange={e=> setWeights(e.target.value)}/>
            </div>
            <div className="formItem">
                <label>Sets: </label>
                <input type="text" placeholder='Sets' onChange={e=> setSets(e.target.value)}/>
            </div>
            <div className="formItem">
                <label>Reps: </label>
                <input type="text" placeholder='Reps' onChange={e=> setReps(e.target.value)}/>
            </div>
        </>
  )
}

export default ResistanceForm