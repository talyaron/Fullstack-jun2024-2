import { useEffect, useState } from "react"
import { Product } from "../../../model/productModel"

export function useProductsVM() {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        fetchProducts().then(products => setProducts(products))
        
    }, [])


    return {
        products

    }
} 

async function fetchProducts(): Promise<Product[]> {  
    try {
        const res = await fetch('http://localhost:3000/api/products/get-all-products')
        const data = await res.json()
        if(!data.products) throw new Error('No products found')
        return data.products

    } catch (error) {
        console.error(error)
        return []
    }  
    
}