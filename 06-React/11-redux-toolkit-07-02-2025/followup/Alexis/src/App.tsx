
import { useSelector } from 'react-redux'
import './App.css'
import AddButton from './view/addButton/AddButton'
import { RootState } from '@reduxjs/toolkit/query'
import RemoveButton from './view/addButton/RemoveButton'

function App() {

const counter = useSelector((state: RootState) => state.counter.value)



  return (
    <div>
      <h1>Hi</h1>
      <p>Counter value: {counter}</p>
      <AddButton />
      <RemoveButton />
    </div>
  )
}

export default App
