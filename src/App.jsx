import { useState } from "react";
import "./App.css";
import CountArray from "./components/Array";
import Button from "./components/Button";
import User from "./components/user";
//import {Table} from "./components/Table";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Table/> */}
      <User count={count} />
      <Button count={count} setCount={setCount} />
    </>
  );
}

export default App;
