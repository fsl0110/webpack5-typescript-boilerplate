import React, { FC, useState } from "react";

interface Props {
  count: number;
}

export const ES2021: FC<Props> = ({ count }) => {
  const p = `The quick brown fox jumps over the lazy dog ${count}. If the dog ${count} reacted, was it really lazy?`;
  const p1 = p.replaceAll("dog", "[dog replaced monkey]");
  const p2 = p1.replaceAll("1", "[count replaced]");

  return (
    <div>
      <h2>ES2021</h2>
      <p>
        <b>String.replaceAll():</b> {p2}
      </p>
    </div>
  );
};
