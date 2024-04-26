import React from "react";

const Card = ({ children, name }) => {
  return (
    <div className=" bg-opacity-20 bg-zinc-500 p-5">
      <h1>
        <strong>{name}</strong>
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default Card;
