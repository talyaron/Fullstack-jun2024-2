import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
      
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1><span style={{fontSize:"7rem"}}>✌️</span>Welcome to Yosef Website <span style={{fontSize:"7rem"}}>✌️</span></h1>
      <div className='links'><NavLink to="/home" className="about-link">כנס לאתר שלי</NavLink></div>
    </>
  )
}

export default App
