import { increment } from '../../redux/counter/CounterSlice'
import { useDispatch } from 'react-redux'

const AddButton = () =>{
    const dispatch = useDispatch()

    function handelAdd(){
        dispatch(increment())
    }


  return (
<button onClick={handelAdd}>
    Add +
</button>
  )
}


export default AddButton
