import { createContext, SetStateAction } from "react";

interface ContextType {
    agregarCard: () => void;
    card: JSX.Element[];
    setCard: React.Dispatch<React.SetStateAction<JSX.Element[]>>
    frase: string;
    setFrase:React.Dispatch<React.SetStateAction<string>>
    busqueda: string;
    setBusqueda:React.Dispatch<React.SetStateAction<string>>

  }

  export const context = createContext<ContextType>({
    agregarCard: () => { },
    card: [],
    setCard: () => { },
    frase: "",
    setFrase: () => "",
    busqueda: "",
    setBusqueda: () => ""

    }
  );