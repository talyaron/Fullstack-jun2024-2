import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  function change(e:React.MouseEvent){
console.log("clicked")
  }
  return (
    <>
 <div className='btnContainer' onClick={(e)=>change(e)}><div className='btnInner'></div></div>
 <div className='btnContainer' onClick={(e)=>change(e)}><div className='btnInner'></div></div>

    </>
  )
}

export default App
