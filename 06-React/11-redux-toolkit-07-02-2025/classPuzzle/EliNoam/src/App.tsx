import { useSelector } from 'react-redux'
import './App.css'
import AddButton from './view/AddButton'
import { RootState } from './redux/store'
import DecreaseButton from './view/DecreaseButton'

function App() {
  const counter = useSelector((state:RootState)=>state.counter.value)
  return (
   <div>
  <h1>{counter}</h1>
  <AddButton />
  <DecreaseButton />
   </div>
  )
}

export default App
