import { FC } from "react";
import { Product } from "../../../model/productModel";
import styles from "./ProductCard.module.css";


interface Props {
    product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
    return (
      <div className={styles["product-card"]}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        {product.image && <img src={product.image} alt={product.name} />}
      </div>
    );
}

export default ProductCard;