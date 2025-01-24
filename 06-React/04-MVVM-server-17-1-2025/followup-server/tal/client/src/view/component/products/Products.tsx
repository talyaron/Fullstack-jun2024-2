
import ProductCard from '../productCard/ProductCard';
import { useProductsVM } from './ProductsVM'

const Products = () => {
    const { products, handleSubmit } = useProductsVM();

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name"  name='name'/>
                <input type="number" placeholder="Price" name='price' />
                <input type="text" placeholder="Description" name="description" />
                <input type="text" placeholder="Category" name="category" />
                <input type="checkbox" name="inStock" /> In Stock
                <input type="text" placeholder="Image URL" name="image" />
                <button type="submit">ADD</button>
            </form>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    )
}

export default Products