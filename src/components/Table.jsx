function Table({ person }) {
  return (
    <>
      <table  border="1" style={{ color: "#3b0a45" }}>
        <thead>
          <th style={{ padding: "10px" }}>First Name</th>
          <th style={{ padding: "10px" }}>Last Name</th>
          <th style={{ padding: "10px" }}>Email</th>
          <th style={{ padding: "10px" }}>DOB</th>
        </thead>
        <tbody>
          {person.map((p) => (
            <tr key={p.id}>
              <td style={{ padding: "10px" }}>{p.firstName}</td>
              <td style={{ padding: "10px" }}>{p.lastName}</td>
              <td style={{ padding: "10px" }}>{p.email}</td>
              <th style={{ padding: "10px" }}>{p.birthDate}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
