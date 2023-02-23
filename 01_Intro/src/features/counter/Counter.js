import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  const onPlusClick = () => {
    dispatch(increment());
  };

  const onMinusClick = () => {
    dispatch(decrement());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={onPlusClick}>+</button>
        <button onClick={onMinusClick}>-</button>
      </div>

      <input
        type="text"
        value={incrementAmount}
        onChange={e => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};
export default Counter;
