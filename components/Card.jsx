import React from "react";

const Card = ({ children, name }) => {
  return (
    <div className="rounded-lg bg-opacity-10 bg-zinc-500 p-5">
      <h1>
        <strong>{name}</strong>
      </h1>
      <div className=" overflow-x-auto">{children}</div>
    </div>
  );
};

export default Card;
