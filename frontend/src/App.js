import './App.css';
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import SignUp from './pages/signUp/SignUp';
import Home from './pages/home/Home';
import React, {useState} from 'react'
import Exercises from './pages/exercises/Exercises';

function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user"))|| null)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home user={user} userSetter={setUser}/> : <Navigate to="/login"/>} />
          <Route path="/register" element={ !user ? <SignUp/> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <Login userSetter={setUser}/> : <Navigate to="/"/>} />
          {
            user && <Route path='/exercises' element ={<Exercises user={user}/>}/>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
