import React, { useState } from "react";
import { ES2016, ES2017, ES2018, ES2019, ES2020, ES2021 } from "./components";

export const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Hello Webpack!!!</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <input value={count} readOnly />
      <ES2016 count={count} />
      <ES2017 count={count} />
      <ES2018 count={count} />
      <ES2019 count={count} />
      <ES2020 count={count} />
      <ES2021 count={count} />
    </div>
  );
};
