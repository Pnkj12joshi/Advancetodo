import React from 'react'
import Dashboard from './Components/Dashboard'
import {Router, Routes, Route} from "react-router-dom";
import Important from './Components/Important';
const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element= { <Dashboard/>} />
          <Route path='/impo' element= {<Important/>}/>
        </Routes>
    </div>
  )
}
export default App
