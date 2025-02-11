
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../redux/counter/CoynterSlice'


const AddPayload = () => {
    
    const dispatch = useDispatch()
    function handlePayload() {
        dispatch(incrementByAmount(10))
    }
    return (
        <div>
            <button onClick={handlePayload}>Add Payload</button>
        </div>
    )
}

export default AddPayload