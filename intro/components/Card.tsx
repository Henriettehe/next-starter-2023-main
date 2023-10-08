import ShoppingCart from "./ShoppingCart";

//Kilde og god hjelp fra studentassistent, for struktur og hvordan tenke videre! 

const Card = ({id, name, price, description }) => {
    return (
      <div className="border border-gray-300 p-5 rounded-lg">
        <h1 className="font-bold">{name}</h1>
        <p>{id}</p>
        <p><strong>Beskrivelse:</strong></p>
        <p>{description}</p>
        <p><strong>Pris:</strong> {price} kr</p>
        {/* Føler det er noe feil her(Lite dynamisk?), ved å importere et komponent inn sånn her for å få det ut på sia? :/  */}
        <ShoppingCart />
      </div>
    );
  };
  
  export default Card;