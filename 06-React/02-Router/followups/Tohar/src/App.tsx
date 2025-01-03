// import { useState } from 'react'
import './App.css'
import { NavLink } from 'react-router'

function App() {

  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <br />
      <NavLink to="/about">About</NavLink>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
