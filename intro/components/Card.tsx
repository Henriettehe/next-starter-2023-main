import ShoppingCart from "./ShoppingCart";

//Kilde og god hjelp fra studentassistent, for struktur og hvordan tenke videre! 

const Card = ({id, name, price, description }) => {
    return (
      <div className="border border-gray-300 p-4 rounded-lg">
        {/* Basert på lastet ned pakke, hentet jeg litt inspirasjon fra den på h1-element */}
        <h1>{name}</h1>
        <p>{id}</p>
        <p>Beskrivelse:</p>
        <p>{description}</p>
        <p>Pris: {price} kr</p>
        {/* Føler det er noe feil her(Lite dynamisk?), ved å importere et komponent inn sånn her for å få det ut på sia? :/  */}
        <ShoppingCart />
      </div>
    );
  };
  
  export default Card;