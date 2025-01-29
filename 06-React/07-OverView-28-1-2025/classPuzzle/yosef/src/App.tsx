import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from "./view/component/ticTacToe/ticTacToe"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
              <h1>Etimad</h1>
              <TicTacToe />

      </div>


  )
}

export default App
