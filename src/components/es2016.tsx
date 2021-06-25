import React, { FC } from "react";

interface Props {
  count: number;
}

export const ES2016: FC<Props> = ({ count }) => {
  return (
    <div>
      <h2>ES2016</h2>
      <p>
        <b>Exponential Operator **:</b>
        {count ** 2}
      </p>
      <p>
        <b>Array.includes:</b>
        {[1, 2, 3].includes(count).toString()}
      </p>
    </div>
  );
};
