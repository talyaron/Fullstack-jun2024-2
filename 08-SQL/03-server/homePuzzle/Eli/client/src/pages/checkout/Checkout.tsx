import { useEffect, useState } from "react";
import Auth from "../auth/Auth";
import { useNavigate, Link } from "react-router";
import CheckoutVM from "./CheckoutVM";
import styles from "./Checkout.module.scss";
import Product from "../../components/product/Product";
const Checkout = () => {
  const { userLogged, loading } = Auth();
  const navigate = useNavigate();
  const {
    productsCart,
    productsBought,
    buyCheckoutProducts,
    loadingProducts,
    removeFromCart,
    thanksForBuying,
  } = CheckoutVM();
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
    if (!userLogged && !loading) {
      navigate("/main");
    }
  }, [userLogged, navigate, loading]);

  useEffect(() => {
    if (productsCart) {
      setSum(
        productsCart.reduce((acc, product) => acc + +product.product_price, 0)
      );
    }
  }, [productsCart]);

  function isLoadingBought() {
    if (loadingProducts) {
      return <h1>Loading</h1>;
    } else if (productsBought.length === 0) {
      return <h1>No bought products yet</h1>;
    } else {
      return null;
    }
  }
  function isLoadingCheckout() {
    console.log(loadingProducts);

    if (loadingProducts) {
      return <h2>Loading</h2>;
    } else if (productsCart.length === 0) {
      return <h2>No products in checkout yet</h2>;
    } else {
      return null;
    }
  }

  return (
    <div>
      <Link to="/">
        <button>back</button>
      </Link>
      <h1>checkout</h1>
      {thanksForBuying && (
        <h2 className={styles.thanks}>{thanksForBuying}</h2>
      )}{" "}
      {productsCart.length > 0 && (
        <div className={styles.checkoutCard}>
          <h3>Total cost:</h3>
          {sum && <h2>{sum}</h2>}
          <button onClick={() => buyCheckoutProducts()}>Buy</button>{" "}
        </div>
      )}
      {Array.isArray(productsCart) && productsCart.length > 0
        ? productsCart.map((product, num) => (
            <Product
              id={product.product_id}
              key={num + 2}
              name={product.product_name}
              price={product.product_price}
              description={product.product_description}
              imgUrl={product.product_imgUrl}
              canBuy={false}
              removeFromCart={removeFromCart}
            />
          ))
        : isLoadingCheckout()}
      <br />
      <hr />
      <h2>previously bought products:</h2>
      {Array.isArray(productsBought) && productsBought.length > 0
        ? productsBought.map((product, num) => (
            <Product
              id={product.product_id}
              key={num + 2}
              name={product.product_name}
              price={product.product_price}
              description={product.product_description}
              imgUrl={product.product_imgUrl}
              canBuy={false}
            />
          ))
        : isLoadingBought()}
    </div>
  );
};

export default Checkout;
