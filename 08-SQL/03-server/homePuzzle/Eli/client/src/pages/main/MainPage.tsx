import { Link, useNavigate } from "react-router";
import Auth from "../auth/Auth";
import { useEffect } from "react";
import MainPageVM from "./MainPageVM";
import Product from "../../components/product/Product";
import styles from "./MainPage.module.scss"
const MainPage = () => {
  const { userLogged, loading } = Auth();
  const navigate = useNavigate();
  const { products } = MainPageVM();

  useEffect(() => {
    if (!userLogged && !loading) {
      navigate("/login");
    }
  }, [userLogged, navigate, loading]);
  console.log(products)
  return (
    <div>
      <h1>Welcome to the shop!</h1>
      <div className={styles.productList}>
      {Array.isArray(products) && products.length > 0 ? (
  products.map((product) => (
    <Product
      key={product.product_id} 
      name={product.product_name} 
      price={product.product_price} 
      description={product.product_description} 
      imgUrl={product.product_imgUrl} 
    />
  ))
) : (
        <h1>loading</h1>
      )}

</div>
      <Link to={"/add-product"}>
        <button>add product</button>
      </Link>
    </div>
  );
};

export default MainPage;
