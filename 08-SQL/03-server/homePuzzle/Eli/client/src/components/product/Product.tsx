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
  removeFromCart?: (productId: number) => void;
}
const Product: FC<ProductProps> = ({
  id,
  name,
  description,
  imgUrl,
  price,
  canBuy,
  setItemAdded,
  removeFromCart
}) => {
  const { addToCart, itemAdded } = ProductVM();
  useEffect(() => {
    if(setItemAdded)
    setItemAdded(itemAdded);
  }, [itemAdded, setItemAdded]);

  return (
    <div className={styles.container} >
      <div className={styles.card}>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={imgUrl} alt={name} />
        <p className={styles.price}>$ {price}</p>
      </div>
      {canBuy ? <button onClick={() => addToCart(id)}>add to cart</button> : ""}
      {removeFromCart ? <div className={styles.removeBtn}><button  onClick={() => removeFromCart(id)}>remove from cart</button></div> : ""}

    </div>
  );
};

export default Product;
