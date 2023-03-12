const Card = ({ frase }: { frase: string }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tarjeta</div>
        <p className="text-gray-700 text-base">{frase}</p>
      </div>
    </div>
  );
};

export default Card;
