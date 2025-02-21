import { useState } from "react";
import styles from "./NewProduct.module.scss"


function NewProduct() {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [description, setDescription] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [inStock, setInStock] = useState<boolean>(false);

    const handleAddProduct = () => {

    };

    return (
        <>
            <h3>Add new product</h3>
            <form>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    placeholder="name"
                    required />
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className={styles.input}
                    placeholder="name"
                    required />
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.input}
                    placeholder="name"
                    required />
                <input
                    type="text"
                    id="name"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={styles.input}
                    placeholder="name"
                    required />
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    placeholder="name"
                    required />
                <button onClick={handleAddProduct}></button>
            </form>
        </>
    )
}

export default NewProduct;