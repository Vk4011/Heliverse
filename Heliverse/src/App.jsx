import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Team from './components/Team'


function App() {


  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/team" element={<Team/>} />
    </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
