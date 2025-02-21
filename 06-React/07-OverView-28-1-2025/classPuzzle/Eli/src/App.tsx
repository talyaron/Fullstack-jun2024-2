import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TiktTakToe from './View/TiktTakToe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TiktTakToe></TiktTakToe>
    </>
  )
}

export default App
