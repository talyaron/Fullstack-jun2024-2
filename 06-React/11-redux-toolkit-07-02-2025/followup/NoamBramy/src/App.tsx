import AddButton from './view/addButton/AddButton'
import './App.css'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'

function App() {
  const counter = useSelector((state:RootState) => state.counter.value)
  return (
    <div>
      <AddButton></AddButton>
      <h2>{counter}</h2>
    </div>
  )
}

export default App
