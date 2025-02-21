import React, { useState } from 'react';

const AddProduct: React.FC = () => {
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        description: '',
        category: '',
        inStock: true,
        image: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [id]: id === 'price' ? Number(value) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/products/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const data = await response.json();
            alert(data.message);

            setProduct({
                name: '',
                price: 0,
                description: '',
                category: '',
                inStock: true,
                image: '',
            });

        } catch (error) {
            console.error('Error:');
            alert('Failed to add product');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={product.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={product.price}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={product.description}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    id="category"
                    value={product.category}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="inStock">In Stock:</label>
                <input
                    type="checkbox"
                    id="inStock"
                    checked={product.inStock}
                    onChange={(e) =>
                        setProduct((prev) => ({ ...prev, inStock: e.target.checked }))
                    }
                />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    value={product.image}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
