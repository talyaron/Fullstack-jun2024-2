

export function useProductsVM() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts().then(products => setProducts(products));
    }, []);

    return { products };
}

async function fetchProducts(): Promise<Product[]> {
    try {
        const res = await fetch('http://localhost:3000/api/products/get-all-products');

    }