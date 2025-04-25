import { useEffect, useState } from "react";
import { ProductModel } from "../../model/productModel";

const CheckoutVM = () => {
  const [productsCart, setProductsCart] = useState<ProductModel[]>([]);
  const [productsBought, setProductsBought] = useState<ProductModel[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [thanksForBuying, setThanksForBuying] = useState("");

  async function removeFromCart(productId: number) {
    setProductsCart(
      productsCart.filter((product) => product.product_id !== productId)
    );
    const response = await fetch(
      "http://localhost:3000/api/products/remove-from-cart-product",
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
      console.log("product removed from cart !");
    } else {
      alert("removing product error");

      console.error("adding product failed");
    }
  }
  async function buyCheckoutProducts() {
    const response = await fetch(
      "http://localhost:3000/api/products/buy-checkout-products",
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (response.ok) {
      console.log("bought products!", response);
    } else {
      console.error("getting product failed", response);
    }
    const data = await response.json();
    console.log(data);
    getCheckoutProducts();
    setThanksForBuying("thank you for the purchase !");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
    setProductsCart(data.productsCart);
    setProductsBought(data.productsBought);
    setLoadingProducts(false);
  }

  useEffect(() => {
    getCheckoutProducts();
  }, []);
  return {
    productsCart,
    productsBought,
    buyCheckoutProducts,
    loadingProducts,
    removeFromCart,
    thanksForBuying,
  };
};

export default CheckoutVM;
