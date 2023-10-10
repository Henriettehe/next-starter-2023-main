//Kilde og god hjelp fra studentassistent, for struktur og hvordan tenke videre! 

const Card = ({ id, name, price, description }) => {

  const handleClick = (product: any) => {
    console.log(product);
}; 

    return (
      <div className="border 1px border-gray-300 p-5 rounded-lg">
        <h1 className="font-bold">{name}</h1>
        <p>{id}</p>
        <p><strong>Beskrivelse:</strong></p>
        <p>{description}</p>
        <p><strong>Pris:</strong> {price} kr</p>
        {/* Flyttet på denne, sånn at det er mer samlet*/}
        <button type="button" onClick={handleClick} style={{ backgroundColor: "darkblue", color: "white", padding: "8px 16px", borderRadius: "0.5rem", fontWeight: "bold"}} className="font-bold px-4 py-2 rounded-lg">
            Legg til i handlevogn
       </button>
      </div>
    );
  };
  
  export default Card;