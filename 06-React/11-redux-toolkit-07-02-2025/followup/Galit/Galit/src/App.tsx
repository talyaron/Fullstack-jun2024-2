import { useState } from 'react'
import AddButton from './view/addButton/addButton'
import './App.css'
import { RootState } from './redux/store'
import { useSelector } from 'react-redux'
import RemoveButton from './view/addButton/removebutton'
import AddAmount from './view/components/AddAmount'

function App() {
const counter = useSelector ((state:RootState) => state.counter.value)
  return (
  
      <div className="App">
        <div className="container">
      <h1>Redux</h1>
      <button className="btn">
      <AddButton />
      <RemoveButton />
      <AddAmount />
      <h2> {counter}</h2>
      </button>
      </div>
      </div>
    
  )
}

export default App
