function Table() {
  const student = [
    {
      name: "Carl jhonson",
      department: "Electronics and Communication Engineering",
      regNo: "002",
    },
    {
      name: "main ramn",
      department: "Electronics and Communication Engineering",
      regNo: "003",
    },
  ];
  return (
    <>
      <table border="1" style={{ color: "#3b0a45" }}>
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
    </>
  );
}

export default Table;