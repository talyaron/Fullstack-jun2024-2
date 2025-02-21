
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/counter/counterSlice'

const AddButton = () => {

    const dispatch = useDispatch()

    function handleAdd() {
        dispatch(increment()) //action creator
    }

  return (
    <button onClick={handleAdd}>
        Add
    </button>
  )
}

export default AddButton