import { useState } from "react";
import User from "./user";

const Number = ({fn}) => {
  const [number, SetNumber] = useState();
  return (
    <div>
      <h2>Enter a num</h2>
      <input
        style={{
          width: "250px",
          height: "40px",
          border: "3px solid black",
          borderRadius: "8px",
          padding: "6px",
        }}
        type="number"
        value={number}
        onChange={(e) => SetNumber(e.target.value)}
        placeholder="Enter a num"
      />
      {/* <button>Submit</button> */}
      <User count={number} />
      <button onClick={()=>fn(5)}>click to parent</button>
    </div>
  );
};

export default Number;
