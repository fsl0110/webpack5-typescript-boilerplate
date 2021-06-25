import React, { FC, useState } from "react";

interface Props {
  count: number;
}

export const ES2020: FC<Props> = ({ count }) => {
  const [promiseObj, setPromiseObj] = useState();

  const p1 = Promise.resolve(count);
  const p2 = Promise.reject(new Error("An error occurs!"));
  const p3 = new Promise((resolve) => setTimeout(() => resolve(count), 500));

  const promises = [p1, p2, p3];

  Promise.allSettled(promises).then((values: any) => setPromiseObj(values));

  return (
    <div>
      <h2>ES2020</h2>
      <p>
        <b>Promise.allSettled():</b>
        <pre>{JSON.stringify(promiseObj, null, 2)}</pre>
      </p>
    </div>
  );
};
