import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByAmount } from '../../redux/counter/counterSlice';

const AddAmount = () => {
    const dispatch = useDispatch();

    

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const amount = Number(form.get('amount'));        

        dispatch(incrementByAmount(amount)) //action creator
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="amount" />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddAmount