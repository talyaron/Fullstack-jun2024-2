import  { FC } from "react";
import styles from "./Product.module.scss"
interface ProductProps {
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}
const Product: FC<ProductProps> = ({ name, description, imgUrl, price }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imgUrl} alt={name} />
      <p className={styles.price}>$ {price}</p>
    </div>
  );
};

export default Product;
