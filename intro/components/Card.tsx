import ShoppingCart from "./ShoppingCart";

const Card = ({ id, name, price, description }) => {
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{id}</p>
        <p>Beskrivelse:</p>
        <p>{description}</p>
        <p>Pris: {price} kr</p>
        {/* Føler det er noe feil her(Lite dynamisk?), ved å importere et komponent sånn? :/  */}
        <section className="bg-[#64748b]"> 
            <ShoppingCart />
        </section>
        
      </div>
    );
  };
  
  export default Card;