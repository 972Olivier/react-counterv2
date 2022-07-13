import NewCounter from "./NewCounter";
const addCounter = () => {
  return <NewCounter></NewCounter>;
};
const Counter = () => {
  return (
    <section>
      <button className="add" onClick={addCounter}>
        Add counter
      </button>
      <NewCounter></NewCounter>
      {/* {addCounter()} renvoie bien mon component suplémentaire */}
      {addCounter}
    </section>
  );
};

export default Counter;
