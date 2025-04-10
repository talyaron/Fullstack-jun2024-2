import { useEffect, useState } from "react";
import { Product } from "../../model/productModel";

const MainPageVM = () => {
    const [products, setProducts] = useState<Product[]>([]);
        async function getProducts() {
        const response = await fetch(
            "http://localhost:3000/api/products/get-products",
            {
              method: "GET",
              credentials: "include",
            }
          );
      
          if (response.ok) {
            console.log("got products!",response);
          } else {            
            console.error("getting product failed",response);
          }
          const data = await response.json();
          setProducts(data.products);

    }

    useEffect(() => {
        getProducts();
      }, []);
  return ({
    products}
  )
}

export default MainPageVM
