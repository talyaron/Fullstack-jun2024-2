
import { useSelector } from 'react-redux'
import './App.css'
import AddButton from './view/addButton/AddButton'
import { RootState } from './redux/store'
import AddAmount from './view/addAmount/AddAmount'


function App() {

  const counter = useSelector((state: RootState) => state.counter.value)

  return (
    <div>
      <h1>Hi</h1>
      <AddButton /><AddAmount />
      <h2>{counter}</h2>
    </div>
  )
}

export default App
