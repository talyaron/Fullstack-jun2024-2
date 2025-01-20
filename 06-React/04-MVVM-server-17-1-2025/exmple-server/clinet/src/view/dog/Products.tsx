import ProductCard from './ProductCard';
import { ProductModel } from './ProductModel';
import { useProductVM } from './ProductsVM';


const Products = () => {

  const { products, getAllProducts } = useProductVM();

  return (
    <div>
      <h1>Products</h1>
      {products && products.map((product:ProductModel) => (<ProductCard key={product._id} product={product} />))}
      <button onClick={getAllProducts}>Get All Products</button>
    </div>
  )
}

export default Products