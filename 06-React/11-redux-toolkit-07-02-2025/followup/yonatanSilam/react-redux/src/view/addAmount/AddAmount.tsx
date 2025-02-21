import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/counter/counterSlice";
import { FormEvent } from "react";

const AddAmountButton = () => {
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const amount = Number(form.get("amount"));

    dispatch(incrementByAmount(amount));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="amount" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAmountButton;
