import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from '../src/style/App.module.scss'

function App() {
  const [isChecked1, setCheck1] = useState(false)
  const [isChecked2, setCheck2] = useState(false)

  function checkBox1(){
    if (!isChecked1) setCheck1(true)
    if (isChecked1) setCheck1(false)
    if (isChecked2) setCheck2(false)
  }

  function checkBox2(){
    if (!isChecked2) setCheck2(true)
    if (isChecked2) setCheck2(false)
    if (isChecked1) setCheck1(false)
    
  }
 

  return (
<div className={style.main}>
  <h2>Level 1</h2>
<p className={isChecked1 ? style.btn1 : ""}>Hey there, how are you?</p>
<p className={isChecked2 ? style.btn2 : ""}>My name is Yosk.</p>
<p className={isChecked1 ? style.btn1 : ""}>I am learning React.</p>
<p className={isChecked2 ? style.btn2 : ""}>I am from Abu Gosh.</p>

  

      <input
      onChange={checkBox1}
      checked={isChecked1}
      type="checkbox"
      id="exampleCheckbox"
      name="exampleCheckbox" />
      <label htmlFor="exampleCheckbox">Try me 1</label>

      <br /><br />

      <input
      onChange={checkBox2}
      checked={isChecked2}
      type="checkbox"
      id="exampleCheckbox"
      name="exampleCheckbox" />
      <label htmlFor="exampleCheckbox">Try me 2</label>
    </div>
  )
}

export default App
