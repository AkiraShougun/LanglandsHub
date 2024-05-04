import { ReactElement } from "react";

interface CardProps {
  children: ReactElement | ReactElement[];
  name: string;
}

const Card = ({ children, name }: CardProps) => {
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
