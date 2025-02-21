import React, { useState } from 'react';
import { addProduct } from './FormVM';
import { Product } from '../../../model/productModel';
import { fetchProducts, useProductsVM } from '../products/ProductsVM';

const Form: React.FC = () => {
  const { products, setProducts } = useProductsVM();
  const [newProduct, setNewProduct] = useState<Product>({
    _id: '',
    name: '',
    price: 0,
    description: '',
    category: '',
    inStock: false,
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const addedProduct = await addProduct(newProduct);
      setProducts((prevProducts: Product[]) => [...prevProducts, addedProduct]);

      setNewProduct({
        _id: '',
        name: '',
        price: 0,
        description: '',
        category: '',
        inStock: false,
        image: '',
      });
      fetchProducts ()
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={newProduct.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleChange}
          required
        />
        <label>
          <input
            type="checkbox"
            id="inStock"
            name="inStock"
            checked={newProduct.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Form;
