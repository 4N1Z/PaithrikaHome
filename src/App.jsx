import React from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='App'>

      <Navbar/>
      <Home/>
      <Projects/>
      
    </div>
  )
}

export default App