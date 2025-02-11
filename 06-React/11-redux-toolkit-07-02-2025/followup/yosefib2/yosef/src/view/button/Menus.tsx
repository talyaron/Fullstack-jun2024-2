import { decrement, increment } from '../../redux/counter/CounterSlice'
import { useDispatch } from 'react-redux'

const MenusButton = () =>{
    const dispatch = useDispatch()

    function handelAdd(){
        dispatch(decrement())
    }


  return (
<button onClick={handelAdd}>
    Add -
</button>
  )
}


export default MenusButton
