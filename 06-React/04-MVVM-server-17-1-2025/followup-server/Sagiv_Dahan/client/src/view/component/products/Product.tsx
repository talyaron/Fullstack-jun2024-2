import ProductCard from '../productCard/ProductCard';
import { useProductsVM } from './ProductsVM'

const Product = () => {
    const { products  } = useProductsVM();

    return (
        <div>
            {products.map(product => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    )
}

export default Product