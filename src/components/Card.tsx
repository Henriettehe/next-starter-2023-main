import ProductInfo from "./ProductInfo";
import Title from "./Title";

/* Første forsøk...
export default function Product({}){
    return(
        <section>
            <Title />
            <ProductInfo />
        </section>
    )
} */

const Card = ({ id, name, price, description }) => {
    return (
      <div className="card">
        <h1>{name}</h1>
        <p>{id}</p>
        <p>Beskrivelse:</p>
        <p>{description}</p>
        <p>Pris: {price} kr</p>
      </div>
    );
  };
  
  export default Card;