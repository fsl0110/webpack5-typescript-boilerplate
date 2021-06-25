import React, { FC } from "react";

interface Props {
  count: number;
}

export const ES2017: FC<Props> = ({ count }) => {
  return (
    <div>
      <h2>ES2017</h2>
      <p>
        <b>Object.values:</b>
        {Object.values({ foo: 0, bar: count }).toString()}
      </p>
      <p>
        <b>padStart():</b>
        {count.toString().padStart(10, "0")}
      </p>
    </div>
  );
};
