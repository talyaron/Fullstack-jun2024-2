import { useState } from "react"
import { Product } from "../../../model/productModel";

export function usePorductFormVM()
{
    const [formData, setFormData] = useState<Product>({
        _id: '',
        name: '',
        description: '',
        price: 0,
        category: '',
        inStock: false,
      });

    const handleInputChange = (event: any) => {
        const { name, value, type, checked } = event.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value, });
      };

      const handleSubmit = (event: any) => {
        event.preventDefault();
        addProduct(formData);
      };



    return{
        formData,
        handleInputChange,
        handleSubmit

    }
}


export async function addProduct(product: Product)
{
    await fetch('http://localhost:3000/api/products/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
}