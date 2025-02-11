import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/store'
import AddButton from './view/addButton/AddButton'
import RemoveButton from './view/removeButton/RemoveButton'

function App() {

  const counter = useSelector((state: RootState) => state.counter.value)

  return (
    <>
      <h1>{counter}</h1>
      <AddButton/>
      <RemoveButton/>
    </>
  )
}

export default App
