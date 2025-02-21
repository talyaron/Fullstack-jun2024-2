import { useEffect, useState } from "react";
import { ProductModel } from "../Model/ProductModel";
import style from "./Product.module.scss"
function getAllProducts() {
  const [products, setProducts] = useState<ProductModel[]>([]);

  async function getProducts() {
    fetch("http://localhost:3000/api/products/get-all-products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      })
      .catch((error) => console.error(error));
  }

  function renderProduct() {
    return products.map(
      (product, index) =>
        product.inStock && (
          <div key={index} id={product._id} className={style.product}>
            <h1>{product.name}</h1>
            {product.image && (
              <img src={product.image} alt={product.name} />
            ) }
            <p>{product.description}</p>
            <p className={style.cost}>{product.price}$</p>
          
          </div>
        )
    );
  }

  return {
    getProducts,
    renderProduct,
  };
}

export default getAllProducts;
