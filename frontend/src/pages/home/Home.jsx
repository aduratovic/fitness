import LatestActivity from '../../Components/latestActivity/LatestActivity'
import './home.css'
import Navbar from '../../Components/navbar/Navbar'
import { useState } from 'react'
import AddExercise from '../../Components/addExercise/AddExercise'


function Home({user,userSetter}) {
  const [addExercise,setAddExercise] =useState(false)
  const [currentWorkoutType, setCurrentWorkoutType] = useState("")
  
  return (
    <>
      <Navbar userSetter={userSetter}/>
      <div className='home'>
          <div className="main">
              {
                addExercise ? <AddExercise user={user} currentWorkoutType={currentWorkoutType}/> : 
                <LatestActivity setCurrentWorkoutType={setCurrentWorkoutType} setAddExercise={setAddExercise} />
              }
          </div>
          <div className="illustration">
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-doing-exercise-in-the-gym-2511564-2117903.png" alt="illustration" />
          </div>
      </div>
    </>
  )
}

export default Home