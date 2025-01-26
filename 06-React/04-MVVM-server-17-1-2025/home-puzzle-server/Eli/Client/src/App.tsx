import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='card'>
     <h1>Welcome to Todo List</h1>
     <div className='btnContainer'>
     <Link to="login"><button>Log in</button></Link><br />
     <Link to="todo"><button>to list</button></Link>
     </div></div>
    </>
  )
}

export default App
