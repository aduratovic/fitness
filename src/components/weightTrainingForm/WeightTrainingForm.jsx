import React from 'react'
import axios from '../../util/axiosConfig'
import { useEffect } from 'react'
import { useState } from 'react'

function CoditionForExercise ({weightTrainingType,name,enums}){
      if(weightTrainingType === "Dumbbell" && name === "Shoulder"){
        return (<>{enums.weightTrainingDumbbellShoulder.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Dumbbell" && name === "Bicep"){
        return (<>{enums.weightTrainingDumbbellBicep.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Dumbbell" && name === "Tricep"){
        return (<>{enums.weightTrainingDumbbellTricep.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Dumbbell" && name === "Chest"){
        return (<>{enums.weightTrainingDumbbellChest.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Dumbbell" && name === "Back"){
        return (<>{enums.weightTrainingDumbbellBack.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Barbell" && name === "Shoulder"){
        return (<>{enums.weightTrainingBarbellShoulder.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Barbell" && name === "Bicep"){
        return (<>{enums.weightTrainingBarbellBicep.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Barbell" && name === "Tricep"){
        return (<>{enums.weightTrainingBarbellTricep.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Barbell" && name === "Chest"){
        return (<>{enums.weightTrainingBarbellChest.map((item) => <option>{item}</option>)}</>)
      }
      else if(weightTrainingType === "Barbell" && name === "Back"){
        return (<>{enums.weightTrainingBarbellBack.map((item) => <option>{item}</option>)}</>)
      }
}

function WeightTrainingForm() {
    const [weightTrainingType, setWeightTrainingType] = useState("")
    const [name, setName] = useState("")
    const [exercise, setExercise] = useState("")
    const [weights, setWeights] = useState("")
    const [sets, setSets] = useState("")
    const [reps, setReps] = useState("")
    const [enums, setEnums] = useState({})
    const workout = {
        type:"Weight Training",
        weightTrainingType,
        name,
        exercise,
        weights,
        sets,
        reps
    } 
       
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
                <label>Weight Training Type: </label>
                <select name="weightTrainingType" onChange={e=> setWeightTrainingType(e.target.value)}>
                    <option>Select</option>
                {
                    enums.weightTrainingType && enums.weightTrainingType.map((item) => <option>{item}</option>)
                }
                </select>
            </div>

            <div className="formItem">
                <label>Name: </label>
                <select name="name" onChange={e=> setName(e.target.value)}>
                    <option>Select</option>
                {
                    enums.name && enums.name.map((item) => <option>{item}</option>)
                }
                </select>
            </div>
            <div className="formItem">
                <label>Exercise: </label>
                <select name="exercise" onChange={e=> setExercise(e.target.value)}>
                    <option>Select</option>
                    <CoditionForExercise weightTrainingType={weightTrainingType} name={name} enums={enums}/>
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

export default WeightTrainingForm