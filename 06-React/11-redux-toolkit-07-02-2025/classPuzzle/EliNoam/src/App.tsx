import { useSelector } from 'react-redux'
import './App.css'
import AddButton from './view/AddButton'
import { RootState } from './redux/store'
import DecreaseButton from './view/DecreaseButton'
import IncrementAmount from './view/incrementAmount'

function App() {
  const counter = useSelector((state:RootState)=>state.counter.value)
  return (
   <div>
  <h1>{counter}</h1>
  <AddButton />
  <DecreaseButton />
  <IncrementAmount />
   </div>
  )
}

export default App
