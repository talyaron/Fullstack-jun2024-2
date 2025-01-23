import { ProductModel } from "../../model/productModel";
import styles from "./ProductCard.module.scss";

interface Props {
  product: ProductModel;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles["product-card"]}>
      {product.image && (
        <img src={product.image} alt={`${product.name} image`} />
      )}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
