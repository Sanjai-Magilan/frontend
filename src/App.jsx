//import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [Count, Setcount] = useState(0);
  // const student = [
  //   {
  //     name: "Carl jhonson",
  //     department: "Electronics and Communication Engineering",
  //     regNo: "002",
  //   },
  //   {
  //     name: "main ramn",
  //     department: "Electronics and Communication Engineering",
  //     regNo: "003",
  //   },
  // ];
  // const arr = ["banana ", "plum ", "peach"];
  // const arry = [...arr];
  // const student ={
  //   "name":"Carl jhonson",
  //   "department":"Electronics and Communication Engineering",
  //   "regNo":"002"
  // }
  //const dept = `${student.name} is an ${student.department} student and his register number is ${student.regNo}`
  return (
    <>
      {/* < h1 class="name">Magilan</h1>
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            color: "cyan",
            fontSize: "99px",
            textDecoration: "underline",
          }}
        >
          Magilan
        </h1>
        <h2>927623BEC189</h2>
        <h2>ECE</h2>
      </div> */}
      {/* <div style={{color:"#3b0a45"}}>
      <h1>{dept}</h1>
      </div> */}
      {/* {arry.map((fruit, index) => (
        <h1 key={index}>{fruit}</h1> 
      ))} */}
      {/* <table border="1" style={{color:"#3b0a45"}}>
        <thead>
          <th style={{ padding: "10px" }}>name</th>
          <th style={{ padding: "10px" }}>reg</th>
          <th style={{ padding: "10px" }}>department</th>
        </thead>
        <tbody>
          {student.map((stu, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{stu.name}</td>
              <td style={{ padding: "10px" }}>{stu.regNo}</td>
              <td style={{ padding: "10px" }}>{stu.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
     */}
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

export default App;
