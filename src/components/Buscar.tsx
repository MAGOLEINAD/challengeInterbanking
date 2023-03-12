import useContexto from "../hooks/useContexto";


const Buscar = () => {
  const { busqueda, setBusqueda, card, setCard } = useContexto();
  const filtrarCards = () => {
    const tarjetasFiltradas = card.filter((componente) =>
      componente.props.frase.toLowerCase().includes(busqueda.toLowerCase())
    );
    setCard(tarjetasFiltradas);
  };
  
  return (
    <div className="mt-2 mx-10">
      <label className="font-semibold block ">Buscar Frase</label>
      <input
        className="w-10/12  text-black  font-semibold uppercase text-lg p-4 rounded-md border-solid border-2"
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button
        onClick={filtrarCards}
        className="block bg-indigo-700 hover:bg-indigo-600 transition-all  py-2 w-10/12 text-white rounded-lg mt-2 font-bold uppercase"
      >
        Enviar
      </button>
    </div>
  );
};

export default Buscar;
