import { useEffect, useState } from "react";
import { ProductModel } from "../../model/productModel";

export function useProductVM() {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    // fetchProducts();
  }, []);

  function getAllProducts() {
    fetchProducts();
  }
  function addNewProduct(
    name: any,
    price: any,
    description: any,
    category: any,
    inStock: any
  ) {
    setProduct(name, price, description, category, inStock);
  }
  async function setProduct(
    name: any,
    price: any,
    description: any,
    category: any,
    inStock: any
  ) {
    const response = await fetch(
      "http://localhost:3000/api/products/add-product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          description,
          category,
          inStock,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
  }
  function fetchProducts() {
    fetch("http://localhost:3000/api/products/get-all-products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }

  return {
    products,
    setProducts,
    getAllProducts,
    addNewProduct,
  };
}
