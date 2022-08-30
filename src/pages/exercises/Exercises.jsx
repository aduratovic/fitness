import Navbar from '../../Components/navbar/Navbar'
import './exercises.css'
import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from '../../util/axiosConfig'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useState } from 'react';


function Exercise({user}) {
  const [exercises, setExercises] = useState([])  
  useEffect(() => {
    const getExercises = async ()=>{
      const res = await axios.get('exercises/'+user._id)
      setExercises(res.data)
    }
    getExercises()
  }, [user._id])
  
  
  const clickHandler = async (id)=>{
    console.log('inside handler')
    await axios.delete('exercises/'+id)
    window.location.reload()
  }
  
  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'type', headerName: 'Type', width: 170 },
    { field: 'name', headerName: 'Workout Name', width: 120 },
    { field: 'exercise', headerName: 'Exercise', width: 200 },
    { field: 'duration', headerName: 'Duration', width: 80,},
    { field: 'distance', headerName: 'Distance', width: 80,},
    { field: 'speed', headerName: 'Speed', width: 70,},
    { field: 'weights', headerName: 'Weights', width: 70,},
    { field: 'sets', headerName: 'Sets', width: 70,},
    { field: 'reps', headerName: 'Reps', width: 70,},
    {
      field: 'date',
      headerName: 'Date',
      width: 90,
      renderCell: (params)=>{
        const fullDate = new Date(params.row.createdAt)
        const date = fullDate.getDate()
        const month = fullDate.getMonth()+1
        const year = fullDate.getFullYear()  
          return (`${date}-${month}-${year}`)
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      align: 'center',
      width: 60,
      renderCell: (params)=>{
          return(
                  <DeleteOutlineIcon className="exerciseDelete" onClick={()=>clickHandler(params.row._id)}/>
          )
      }
  }
  ];

  return (
    <div className='exercises'>
        <Navbar/>
        <div className='table'>
          {
              exercises &&
              <DataGrid className='table'
              rows={exercises}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              getRowId={r=> r._id}
          />
          }
        </div>
    </div>
  )
}

export default Exercise