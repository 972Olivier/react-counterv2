import NewCounter from "./NewCounter";

const Counter = ({ counter, setCounter }) => {
  // console.log("this is=", counter[0]);

  let more = [...counter];
  more[0] += 1;
  // console.log(more);
  let less = [...counter];
  less[0] -= 1;
  let resetOne = [...counter];
  resetOne[0] = 0;
  console.log("one ====>", resetOne[0]);
  // console.log("this is=", counter[1]);
  let tabPlus = [...counter];
  tabPlus[1] += 1;
  // console.log(tabPlus);
  let tabMoins = [...counter];
  tabMoins[1] -= 1;
  let reset = [...counter];
  reset[1] = 0;
  console.log("two===>", reset[1]);

  let addTabPlus = [...counter];
  addTabPlus[2] += 1;
  // console.log(tabPlus);
  let addTabMoins = [...counter];
  addTabMoins[2] -= 1;
  let addReset = [...counter];
  addReset[2] = 0;
  console.log("three===>", addReset[2]);

  return (
    <section>
      <button className="add" onClick={() => alert("c'est cliqué")}>
        Add counter
      </button>

      <div className="wrapper">
        {/* premier compteur */}
        <NewCounter
          result={counter[0]}
          setCounter={setCounter}
          more={more}
          less={less}
          reset={resetOne}
        ></NewCounter>

        {/* le deuxième compteur */}
        <NewCounter
          result={counter[1]}
          setCounter={setCounter}
          more={tabPlus}
          less={tabMoins}
          reset={reset}
        ></NewCounter>

        {/* le troisième compteur */}
        <NewCounter
          result={counter[2]}
          setCounter={setCounter}
          more={addTabPlus}
          less={addTabMoins}
          reset={addReset}
        ></NewCounter>
      </div>
    </section>
  );
};

export default Counter;
