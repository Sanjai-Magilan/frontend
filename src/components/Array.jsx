import { useState } from "react";

const CountArray = () => {
  const [count, setCount] = useState([]);

  const addNum = () => {
    setCount([...count, count.length + 1]);
  };

  const subNum = () => {
    // count.pop();
    // setCount([...count]);
    setCount(count.slice(0, -1));
  };

  return (
    <>
      <div>
        <button onClick={addNum} style={{ margin: "2px" }}>
          Count Add
        </button>
        <button onClick={subNum} style={{ margin: "2px" }}>
          Count Sub
        </button>
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        {count.map((value, index) => (
          <h1 key={index}>{value}</h1>
        ))}
      </div>
    </>
  );
};

export default CountArray;
