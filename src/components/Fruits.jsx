function Fruits() {
  const arr = ["banana ", "plum ", "peach"];
  const arry = [...arr];
  return (
    <>
      {arry.map((fruit, index) => (
        <h1 key={index}>{fruit}</h1>
      ))}
    </>
  );
}
export default Fruits;
