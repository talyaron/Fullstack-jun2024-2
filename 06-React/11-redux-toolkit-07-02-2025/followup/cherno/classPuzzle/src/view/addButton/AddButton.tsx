import { useDispatch } from "react-redux"
import { increment } from "../../redux/counter/counterSlice"

const AddButton = () =>
{
    const despatch = useDispatch()

    function handleAdd()
    {
        despatch(increment())
    }

    return (
        <button onClick={handleAdd}>
            Add
        </button>
    )

}

export default AddButton;