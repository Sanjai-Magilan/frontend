import { useState } from "react";
import User from "./user";

const Number = () => {
  const [number, SetNumber] = useState();
  return (
    <div>
      <h2>Enter a num</h2>
      <input
        style={{}}
        type="number"
        value={number}
        onChange={(e) => SetNumber(e.target.value)}
        placeholder="Enter a num"
      />
      {/* <button>Submit</button> */}
      <User count={number} />
    </div>
  );
};

export default Number;
