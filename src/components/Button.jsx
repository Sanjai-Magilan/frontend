import { useState } from "react";
function Button() {
  const [count, setCount] = useState(0);
  const [Count, Setcount] = useState(0);

  return (
    <>
     <h1 style={{color:"#3b0a45"}}>creases</h1>
      <button onClick={() => setCount(count + 1)} style={{ margin: "2px" }}>
        increases {count}
      </button>
      <button onClick={() => Setcount(Count - 1)} style={{ margin: "2px" }}>
        decreases {Count}
      </button>
    </>
  );
}

export default Button;
