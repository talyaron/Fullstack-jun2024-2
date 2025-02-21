import { useDispatch } from "react-redux";
import { decrement } from "../../redux/counter/counterSlice";

const SubButton = () => {
  const dispatch = useDispatch();
  function handleSub() {
    dispatch(decrement());
  }
  return (
    <div>
      <button onClick={handleSub}>Sub</button>
    </div>
  );
};

export default SubButton;
