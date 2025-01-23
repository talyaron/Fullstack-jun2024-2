import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>hi</h1>
     <Link to="login">login</Link><br />
     <Link to="login/register">register</Link>

    </>
  )
}

export default App
