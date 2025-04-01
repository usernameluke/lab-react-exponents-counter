const Counter = ({count, decrement, increment}) => {

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={() => {decrement(count)}}
      >-</button>
      <button className="counter-button" onClick={() => {increment(count)}}>+</button>
    </div>
  );
};

export default Counter;
