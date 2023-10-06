const products = ['Nike', 'Adidas', 'Jordan'];

const Shoes = () => {
  return products.map((shoe) => (
    <ul>
      <li key={shoe}>{shoe}</li>
    </ul>
  ));
};

export default Shoes;