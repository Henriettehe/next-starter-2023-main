import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaCheck } from 'react-icons/fa';

function SideMenu({ isOpen, onClose }) {
  const toggleMenu = () => {
    onClose(!isOpen);
  };

  // Kilde: Kodedeler, hentet fra Chat og Googlesøk. 

  const [products, setProducts] = useState([]); // State to store products
  const [cart, setCart] = useState([]); // State to store the cart

  useEffect(() => {
    // Fetch product data from your API
    // Replace 'your_api_url' with the actual URL of your API
    fetch('./intro/api/products.ts')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Store the fetched products in the 'products' state
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const handleAddToCart = (product: never) => {
    // Add the selected product to the cart
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <FaShoppingCart size={24} color="blue" />
      <h2 className="text-lg">Handlekurv</h2>

      <div className="space-y-2">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-2">
            <span>{product.name}</span>
            <button
              className="flex items-center space-x-1"
              onClick={() => handleAddToCart(product)}
            >
              <span>Legg til</span>
              <FaCheck size={16} color="green" />
            </button>
          </div>
        ))}
      </div>

      <button className="flex items-center space-x-1">
        <span>Fjern</span>
        <FaTimes size={16} color="red" />
      </button>
    </div>
  );
}

export default SideMenu;
