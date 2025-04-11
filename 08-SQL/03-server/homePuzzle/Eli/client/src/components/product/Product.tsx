import { FC, useEffect } from "react";
import styles from "./Product.module.scss";
import ProductVM from "./ProductVM";
interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  canBuy: boolean;
  setItemAdded?: (itemAdded: boolean) => void;
}
const Product: FC<ProductProps> = ({
  id,
  name,
  description,
  imgUrl,
  price,
  canBuy,
  setItemAdded,
}) => {
  const { addToCart, itemAdded } = ProductVM();
  useEffect(() => {
    if(setItemAdded)
    setItemAdded(itemAdded);
  }, [itemAdded, setItemAdded]);
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={imgUrl} alt={name} />
        <p className={styles.price}>$ {price}</p>
      </div>
      {canBuy ? <button onClick={() => addToCart(id)}>add to cart</button> : ""}
    </div>
  );
};

export default Product;
