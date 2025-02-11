
import { useDispatch } from 'react-redux'
import { decrement } from '../../redux/counter/counterSlice'

const RemoveButton = () => {

    const dispatch = useDispatch()

    function handleAdd() {
        dispatch(decrement()) //action creator
    }

  return (
    <button onClick={handleAdd}>
        Remove
    </button>
  )
}

export default RemoveButton