import { Fragment } from "react";
import useContexto from "../hooks/useContexto";

const Grilla = () => {
  const { card } = useContexto();
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2  md:grid-cols-3 gap-2 mt-8 mx-12">
      
      {card.map((card: JSX.Element, index) => (
        <Fragment key={index}>{card}</Fragment>
      ))}
    </div>
  );
};

export default Grilla;
