import { useEffect, useState } from "react";
import Auth from "../auth/Auth";
import { useNavigate } from "react-router";
import CheckoutVM from "./CheckoutVM";
import styles from "./Checkout.module.scss";
import Product from "../../components/product/Product";
const Checkout = () => {
  const { userLogged, loading } = Auth();
  const navigate = useNavigate();
  const { products } = CheckoutVM();
  const [sum, setSum] = useState<number | null>(null);

  useEffect(() => {
    if (!userLogged && !loading) {
      navigate("/main");
    }
  }, [userLogged, navigate, loading]);

  useEffect(() => {
    if (products) {
      setSum(
        products.reduce((acc, product) => acc + +product.product_price, 0)
      );
    }
  }, [products]);
  return (
    <div>
      <h1>checkout</h1>
      <div className={styles.checkoutCard}>
        <h3>Total cost:</h3>
        {sum && <h2>{sum}</h2>}
        <button>Buy</button>
      </div>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product,num) => (
          <Product
            id={product.product_id}
            key={num+2}
            name={product.product_name}
            price={product.product_price}
            description={product.product_description}
            imgUrl={product.product_imgUrl}
            canBuy={false}
          />
        ))
      ) : (
        <h1>loading</h1>
      )}
      <h2>bought products</h2>
     
    </div>
  );
};

export default Checkout;
