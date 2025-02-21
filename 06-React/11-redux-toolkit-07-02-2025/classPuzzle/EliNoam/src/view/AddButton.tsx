import { useDispatch } from 'react-redux'
import { increment } from '../redux/counter/counterSlice';

const AddButton = () => {
    const dispatch = useDispatch();

    function handleAdd(){
        dispatch(increment())///action
    }
  return (
   <button onClick={handleAdd}>Add</button>
  )
}

export default AddButton
