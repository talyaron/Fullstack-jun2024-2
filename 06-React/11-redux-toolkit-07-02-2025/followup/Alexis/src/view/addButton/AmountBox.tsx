import { useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/counter/counterSlice";

const AmountBox = () => {
  const dispatch = useDispatch();

  function handleIncrement(event: any) {
    event.preventDefault();
    const amount = parseInt(event.target.elements.amount.value, 10);
    dispatch(incrementByAmount(amount)); //action creator
  }

  return (
    <form onSubmit={handleIncrement}>
      <input name="amount" type="number" />
      <button type="submit">Add</button>
    </form>
  );
};

export default AmountBox;
