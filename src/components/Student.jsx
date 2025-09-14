function Student() {
  const student = {
    name: "Carl jhonson",
    department: "Electronics and Communication Engineering",
    regNo: "002",
  };
  const dept = `${student.name} is an ${student.department} student and his register number is ${student.regNo}`;
  return (
    <>
      <div style={{ color: "#3b0a45" }}>
        <h1>{dept}</h1>
      </div>
    </>
  );
}

export default Student;
