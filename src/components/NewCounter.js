const NewCounter = ({ setCounter, more, less, reset, result }) => {
  return (
    <div>
      <div className="resultCounter">
        <div className="box">
          <span
            onClick={() => {
              setCounter(less);
            }}
            className="moins"
          >
            -
          </span>
          <div className="result">
            <span>{result}</span>
          </div>
          <span
            onClick={() => {
              setCounter(more);
            }}
          >
            +
          </span>
        </div>
        <div>
          <button
            onClick={() => {
              setCounter(reset);
            }}
            className="reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCounter;
