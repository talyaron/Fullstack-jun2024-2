import { useDispatch } from "react-redux";
import { incrementByAmount } from "../redux/counter/counterSlice";
import { useRef } from "react";

const IncrementAmount = () => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (ref.current) {
      const value = Number(ref.current.value) || 0; // Convert to number, default to 0
      dispatch(incrementByAmount(value)); // Dispatch action
    }
  }
  return (
    <div>
      <input type="number" ref={ref} />
      <br />
      <button onClick={handleClick}>increment by^</button>
    </div>
  );
};

export default IncrementAmount;
