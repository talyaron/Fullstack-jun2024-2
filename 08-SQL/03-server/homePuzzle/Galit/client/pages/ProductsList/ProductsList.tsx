// ProductsList.tsx
import React, { useEffect, useState } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState<number | null>(null);

  // Fetch products from server
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  const addToCart = async (productId: number) => {
    if (!userId) {
      alert('Please log in first');
      return;
    }

    const response = await fetch('http://localhost:3000/api/orders/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, productId }),
    });

    if (response.ok) {
      alert('Product added to cart!');
    } else {
      alert('Error adding product to cart!');
    }
  };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
