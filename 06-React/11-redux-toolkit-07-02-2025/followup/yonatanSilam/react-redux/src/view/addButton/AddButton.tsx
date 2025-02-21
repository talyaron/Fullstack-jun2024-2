
import { useDispatch } from 'react-redux'
import { increment } from '../../redux/counter/counterSlice'

const addButton = () => {
    const dispatch = useDispatch()
    
    function handleAdd(){
        dispatch(increment())
    }
  return (
    <div> 

      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default addButton
