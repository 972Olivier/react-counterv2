import { useState } from "react";

const NewCounter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="resultCounter">
        <div className="box">
          <span
            onClick={() => {
              setCounter(counter - 1);
            }}
            className="moins"
          >
            -
          </span>
          <div className="result">
            <span>{counter}</span>
          </div>
          <span
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </span>
        </div>
        <div>
          <button
            onClick={() => {
              setCounter(0);
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
