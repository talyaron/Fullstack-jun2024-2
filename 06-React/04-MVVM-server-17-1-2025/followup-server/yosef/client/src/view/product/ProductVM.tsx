import { useEffect, useState } from "react";
import { ProductModel } from "./ProductModel"; 

export function useProductVM(){
    const [products, setProducts ] = useState<ProductModel[]>([]);
    
    useEffect(() => {
        fetchProducts();
      }, [])

      function getAllProducts(){
        fetchProducts
      }

      function fetchProducts(){
        fetch('http://localhost:3000/api/products/get-all-products')
       .then((response) => response.json())
       .then((data) => setProducts(data.products))
       .catch((error) => console.error(error))
      }
      
      return { products, getAllProducts };
}