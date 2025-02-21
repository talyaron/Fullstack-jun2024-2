import { increment, incrementByAmount } from "../../redux/counter/CounterSlice";
import { useDispatch } from "react-redux";
import React from "react";

const AddNumber = () => {
  const dispatch = useDispatch();

  function handelAddAmount(amount: number | null){
    if (amount === null) return
    dispatch(incrementByAmount(amount));
  }

  function handelSubmit(event: React.FormEvent<HTMLFormElement>)
  {

  event?.preventDefault();
  const form = new FormData(event.currentTarget);
  const amount = parseInt(form.get("amount") as string);
  handelAddAmount(amount);
  }


  return (
    <div>
      <form onSubmit={handelSubmit}>
      <input type="number" name="amount" />
      <button>Add number</button>
      </form>
    </div>
  );
};

export default AddNumber;
