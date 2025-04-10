import AddProductVM from "./AddProductVM";
import styles from "./AddProduct.module.scss";

const AddProduct = () => {
  const { submitForm } = AddProductVM();
  return (
    <div className={styles.container}>
      <h1>Add Product</h1>
      <form onSubmit={submitForm} className={styles.form}>
        <input type="text" name="name" placeholder="product name" />
        <textarea
          name="description"
          placeholder="Product description"
          rows={3}
          maxLength={300}
          className={styles.textarea}
        />
        <input
          type="number"
          name="price"
          placeholder="Product price"
          min="0"
          step="0.01"
          inputMode="decimal"
        />{" "}
        <input type="text" name="imgUrl" placeholder="product image url" />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
