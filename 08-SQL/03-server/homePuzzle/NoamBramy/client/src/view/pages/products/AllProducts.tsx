import { useAllProductsVM } from './AllProductsVM';
import styles from './AllProducts.module.scss';

export default function AllProducts() {
  const { products, cartItems, boughtItems, addToCart, buyProduct } = useAllProductsVM();

  return (
    <div>
      <h2>Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Your Cart</h2>
      <div className={styles.grid}>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => buyProduct(product.id)}>Buy</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <h2>Your Orders</h2>
      <div className={styles.grid}>
        {boughtItems.length > 0 ? (
          boughtItems.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>You have not purchased any items yet.</p>
        )}
      </div>
    </div>
  );
}
