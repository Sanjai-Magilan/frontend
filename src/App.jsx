//import { useState } from "react";
import "./App.css";
import CountArray from "./components/Array";
import Button from "./components/Button";
import User from "./components/user";
import Number from "./components/Form";
//import {Table} from "./components/Table";

function App() {
  const child = (childvalue) => {
    console.log("from child", childvalue);
  };
  // const [count, setCount] = useState(0);
  return (
    <>
      {/* <Table/> */}
      <Number fn={child} />
      {/* <Button count={count} setCount={setCount} /> */}
    </>
  );
}

export default App;
