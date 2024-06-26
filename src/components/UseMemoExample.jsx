import { useState } from "react";

const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  console.log("Calculating value", Date.now());
  const value = a + b;

  return (
    <div>
      <button onClick={() => setA(a + 1)}>update a: {a}</button>
      <button onClick={() => setB(b + 1)}>update b: {b}</button>
      <button onClick={() => setC(c + 1)}>update c: {c}</button>
      <hr />
      <p>value:{value}</p>
    </div>
  );
};

export default UseMemoExample;
