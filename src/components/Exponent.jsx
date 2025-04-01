const Exponent = ({count, num}) => (
  <div className="exponent-counter-container">
  <p className="exponent-label">n{num}</p>
  <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{count}</span></p>
</div>
);

export default Exponent;