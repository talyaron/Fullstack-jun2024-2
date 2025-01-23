import { useState } from 'react'
import './App.css'
import LevelOne from './view/components/level one/LevelOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LevelOne></LevelOne>
    </>
  )
}

export default App
