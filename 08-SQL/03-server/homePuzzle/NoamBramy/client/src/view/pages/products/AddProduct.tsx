import { useAddProductVM } from './AddProductVM';
import styles from './AddProduct.module.scss';

export default function AddProduct() {
  const { image, setImage, price, setPrice, handleSubmit, name, setName } = useAddProductVM();

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
