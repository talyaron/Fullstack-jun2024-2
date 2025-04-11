import { Link } from "react-router";
import Auth from "../auth/Auth";
import { useEffect, useState } from "react";
import MainPageVM from "./MainPageVM";
import Product from "../../components/product/Product";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  const { userLogged, loading } = Auth();
  const { products } = MainPageVM();
  const [canBuy, setCanBuy] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    if (userLogged && !loading) {
      setCanBuy(true);
    }
  }, [userLogged, loading]);
  console.log(products);
  return (
    <div>
      {!canBuy && (
        <Link to={"/login"}>
          <button className={styles.loginBtn}>login</button>
        </Link>
      )}
      {canBuy && (
        <Link to={"/checkout"}>
          <button className={`${styles.cartBtn} ${itemAdded && styles.shake}`}>
            🛒
          </button>
        </Link>
      )}
      <h1>Welcome to the shop!</h1>
      <div className={styles.productList}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Product
              id={product.product_id}
              key={product.product_id}
              name={product.product_name}
              price={product.product_price}
              description={product.product_description}
              imgUrl={product.product_imgUrl}
              canBuy={canBuy}
              setItemAdded={setItemAdded}
            />
          ))
        ) : (
          <h1>loading</h1>
        )}
      </div>
      {canBuy && (
        <Link to={"/add-product"}>
          <button className={styles.addBtn}>add product</button>
        </Link>
      )}
    </div>
  );
};

export default MainPage;
