import React from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from "./components/About";
import Courses from "./components/Courses";
import Frontend from './components/Frontend'
import Backend from "./components/Backend"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/about' element ={<About/>} />
        <Route path='/courses' element ={<Courses/>}>
        <Route path='/courses/frontend' element={<Frontend/>}/>
        <Route path='/courses/backend' element={<Backend/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
