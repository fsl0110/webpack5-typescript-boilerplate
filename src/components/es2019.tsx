import React, { FC } from "react";

interface Props {
  count: number;
}

export const ES2019: FC<Props> = ({ count }) => {
  const keyValuePairs = [
    ["cow", "🐮"],
    ["pig", "🐷"],
  ];

  const obj = Object.fromEntries(keyValuePairs);

  return (
    <div>
      <h2>ES2019</h2>
      <p>
        <b>Object.fromEntries():</b> {obj.cow} {count}
      </p>
    </div>
  );
};
