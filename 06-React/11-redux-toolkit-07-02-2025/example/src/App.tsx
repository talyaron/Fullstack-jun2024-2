
import { useSelector } from 'react-redux'
import './App.css'
import AddButton from './view/addButton/AddButton'
import { RootState } from './redux/store'


function App() {

  const counter = useSelector((state: RootState) => state.counter.value)

  return (
    <div>
      <h1>Hi</h1>
      <AddButton />
      <h2>{counter}</h2>
    </div>
  )
}

export default App
