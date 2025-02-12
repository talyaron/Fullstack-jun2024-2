import { useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../../redux/counter/counterSlice"

const RemoveButton = () =>
{
    const despatch = useDispatch()

    function handleAdd(event: any)
    {
        event.preventDefault()
        despatch(incrementByAmount(event.target.amount.value))
    }

    return (
        <form onSubmit={handleAdd}>
            <input name="amount" type="number" placeholder="Enter number" />
            <button type="submit">
                add
            </button>
        </form>
    )

}

export default RemoveButton;   