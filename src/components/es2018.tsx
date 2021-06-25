import React, { FC, useState } from "react";

interface Props {
  count: number;
}

export const ES2018: FC<Props> = ({ count }) => {
  const [promiseCount, setPromiseCount] = useState(count);

  const myPromise = new Promise(function (resolve, reject) {
    resolve(count);
  });

  myPromise
    .then((value) => {
      () => setPromiseCount((value as number) + 1);
    })
    .catch()
    .finally(() => setPromiseCount(count + 1));
  return (
    <div>
      <h2>ES2018</h2>
      <p>
        <b>
          Promise.finally(): {count} | {promiseCount}
        </b>
      </p>
    </div>
  );
};
