import { useDispatch } from 'react-redux'
import { increment } from '../../redux/counter/counterSlice'

const AddButton = () => {
  const dispatch = useDispatch()

  function handleAdd() {
    dispatch(increment())
  }
  return (
    <div>
      <button onClick={handleAdd}>Increase</button>
    </div>
  )
}

export default AddButton
