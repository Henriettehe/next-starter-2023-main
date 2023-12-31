import { products } from '../api/products';
import Card from "./Card";

const Cards = () => {
  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </>
  );
};

export default Cards;