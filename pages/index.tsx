import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>hi {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Home;
