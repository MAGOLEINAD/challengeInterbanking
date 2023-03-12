import  { useState } from "react";
import Card from "../components/Card";
import { context } from "./Context";

interface ProviderProps {
  children: JSX.Element | JSX.Element[];

}


const ContextProvider = ({ children }: ProviderProps) => {
  const [card, setCard] = useState<JSX.Element[]>([]);
  const [frase, setFrase] = useState<string>('');
  const [busqueda, setBusqueda] = useState<string>('');

  
  const agregarCard = () => {
    setCard([...card, <Card frase={frase}/>]);
  }

  return (
    <context.Provider
      value={{
        agregarCard,
        card,
        setCard,
        frase,
        setFrase,
        busqueda,
        setBusqueda,
   
      }}
    >
      {children}
    </context.Provider>
  );
};

export { ContextProvider };
export default context;
