import { usePorductFormVM } from "./ProductFormVM";
import styles from './ProductForm.module.scss'

const ProductForm = () =>
{
    const { formData, handleInputChange, handleSubmit } = usePorductFormVM();

    return (
        <form className={styles["product-form"]} onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="price">Product price:</label>
            <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="description">Product description:</label>
            <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="category">Product category:</label>
            <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
            />
            <label htmlFor="inStocj">in stock?</label>
            <input
                type="checkbox"
                id="inStock"
                name="inStock"
                checked={formData.inStock}
                onChange={handleInputChange}
            />
            <button type="submit">Add Product</button>
        </form>
    )
}

export default ProductForm;