import { useEffect, useState } from "react";
import { ProductModel } from "../../model/productModel";

const CheckoutVM = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  async function getCheckoutProducts() {
    const response = await fetch(
      "http://localhost:3000/api/products/get-checkout-products",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("got products!", response);
    } else {
      console.error("getting product failed", response);
    }
    const data = await response.json();
    setProducts(data.products);
  }

  useEffect(() => {
    getCheckoutProducts();
  }, []);
  return { products };
};

export default CheckoutVM;
