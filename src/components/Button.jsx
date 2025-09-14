import { useState } from "react";
function Button({count ,setCount}) {
  // const [count, setCount] = useState(0);
  // const [Count, Setcount] = useState(0);

  return (
    <>
      <h1 style={{ color: "#3b0a45" }}>Counter</h1>
      <button onClick={() => setCount(count + 1)} style={{ margin: "2px" }}>
        Increase {count}
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "2px" }}>
        Decrease {count}
      </button>
    </>
  );
}

export default Button;
