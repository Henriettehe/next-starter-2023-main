import ShoppingCart from "./ShoppingCart";

const Card = ({ id, name, price, description }) => {
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{id}</p>
        <p>Beskrivelse:</p>
        <p>{description}</p>
        <p>Pris: {price} kr</p>
        <ShoppingCart />
      </div>
    );
  };
  
  export default Card;