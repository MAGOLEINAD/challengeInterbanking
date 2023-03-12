import useContexto from "../hooks/useContexto";

const AgregarFrase = () => {
  const { frase, setFrase, agregarCard } = useContexto();
  return (
    <div className="mt-2 mx-10">
      <label className="font-semibold block ">Agregar Frase</label>
      <input
        className="w-10/12  text-black  font-semibold text-lg p-4 rounded-md border-solid border-2"
        type="text"
        value={frase}
        onChange={(e) => setFrase(e.target.value)}
      />
      <button
        onClick={agregarCard}
        className="block bg-indigo-700 hover:bg-indigo-600 transition-all  py-2 w-10/12 text-white rounded-lg mt-2 font-bold uppercase"
      >
        Enviar
      </button>
    </div>
  );
};

export default AgregarFrase;
