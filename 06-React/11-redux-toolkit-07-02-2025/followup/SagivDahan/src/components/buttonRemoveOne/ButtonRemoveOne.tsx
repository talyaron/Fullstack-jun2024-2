import { useDispatch } from 'react-redux'
import { decrement } from '../../redux/counter/CoynterSlice'

const ButtonRemoveOne = () => {
    const dispatch = useDispatch()

    function handleRemove(){
        dispatch(decrement())
    }

  return (
    <div>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default ButtonRemoveOne