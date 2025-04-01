import { useEffect, useState } from "react"
import { Product } from "../../../model/productModel"

export function useProductsVM() {
    const [products, setProducts] = useState<Product[]>([])


    useEffect(() => {
        fetchProducts().then(products => setProducts(products))

    }, [])


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {

            const formData = new FormData(e.currentTarget as HTMLFormElement)
            const name = formData.get('name') as string
            const price = formData.get('price') as string
            const description = formData.get('description') as string
            const category = formData.get('category') as string
            const inStock = formData.get('inStock') as string
            const image = formData.get('image') as string

            if (!name || !price || !description || !category || !inStock) throw new Error('All fields are required')

            const newProduct: Product = {
                name,
                price: parseFloat(price),
                description,
                category,
                inStock: inStock === 'true',
            }
            if (image) newProduct.image = image
            
            setProducts([...products, newProduct])
            addProductToDB(newProduct)
        } catch (error) {
            console.error(error)

        }

    }


    return {
        products,
        handleSubmit

    }
}

async function fetchProducts(): Promise<Product[]> {
    try {
        const res = await fetch('http://localhost:3000/api/products/get-all-products')
        const data = await res.json()
        if (!data.products) throw new Error('No products found')
        return data.products

    } catch (error) {
        console.error(error)
        return []
    }

}

async function addProductToDB(product: Product): Promise<void> {
    try {
        const res = await fetch('http://localhost:3000/api/products/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const data = await res.json()
        console.log(data)
        if (data.error) throw new Error(data.error)
    } catch (error) {
        console.error(error)
    }
}