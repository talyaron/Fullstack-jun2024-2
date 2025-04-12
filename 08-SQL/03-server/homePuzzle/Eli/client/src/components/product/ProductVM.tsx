import { useEffect, useState } from "react";

const ProductVM = () => {
  const [itemAdded, setItemAdded] = useState(false);

  async function addToCart(productId: number) {
    const response = await fetch(
      "http://localhost:3000/api/products/add-to-cart-product",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      }
    );

    if (response.ok) {
      console.log("product added in !");
      setItemAdded(true);
    } else {
      alert("adding product error");

      console.error("adding product failed");
    }
  }
  useEffect(() => {
    if (itemAdded) {
      setTimeout(() => setItemAdded(false), 400);
    }
  }, [itemAdded]);
  return { addToCart, itemAdded };
};

export default ProductVM;
