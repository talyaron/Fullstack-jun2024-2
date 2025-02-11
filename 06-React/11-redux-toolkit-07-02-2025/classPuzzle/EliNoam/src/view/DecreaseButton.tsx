import { useDispatch } from 'react-redux'
import { decrement } from '../redux/counter/counterSlice';

const DecreaseButton = () => {
    const dispatch = useDispatch();

    function handleDecrement(){
        dispatch(decrement())///action
    }
  return (
   <button onClick={handleDecrement}>decrement</button>
  )
}

export default DecreaseButton
