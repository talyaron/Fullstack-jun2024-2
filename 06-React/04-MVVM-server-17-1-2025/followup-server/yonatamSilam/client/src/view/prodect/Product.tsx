import { ProductModel } from "../../model/productModel";
import ProductCard from "./ProductCard";
import { useProductVM } from "./ProductVM";
import styles from "./ProductCard.module.scss";
import { FormEvent } from "react";

const Product = () => {
  const { products, getAllProducts, addNewProduct } = useProductVM();

  function addNewProduct1(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;

    const name = form.name.value; 
    const price = parseFloat(form.price.value); 
    const description = form.description.value;
    const category = form.category.value;
    const inStock = form.inStock.checked; 
    addNewProduct(name,price,description,category,inStock)
  }

  return (
    <div>
      <h1>Products</h1>
      {products.map((product: ProductModel) => (
        <ProductCard key={product._id} product={product} />
      ))}
      <button onClick={getAllProducts}>Get All Products</button>
      <form
        onSubmit={addNewProduct1}
        className={styles.form}
        id="addProductForm"
      >
        <h2>Add New Product</h2>

        <label htmlFor="name">Product Name:</label>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          placeholder="Enter product name"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          placeholder="Enter product price"
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Enter product description"
          required
        ></textarea>

        <label htmlFor="category">Category:</label>
        <select id="category" name="category" required>
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="inStock">In Stock:</label>
        <input type="checkbox" id="inStock" name="inStock" />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Product;
