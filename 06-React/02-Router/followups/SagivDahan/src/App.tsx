import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Everyone</h1>
      <NavLink to="/home">Home</NavLink>
    </>
  )
}

export default App
