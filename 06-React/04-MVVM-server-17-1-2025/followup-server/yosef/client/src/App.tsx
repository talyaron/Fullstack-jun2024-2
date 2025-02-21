import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './view/product/Product'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    instock: ''
  })

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try{
      e.preventDefault()
      console.log(formData)
      const response = await fetch('http://localhost:3000/api/products/add-product',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.status === 200){
        console.log('Product added successfully')
      }
      else{
        console.error('Failed to add product')
      }
      {}
  
    }
    catch(error){
      console.error(error)
    }
  }


  return (
    <>
      <p>Welcome to the Product List App</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name">name</label>
        <br />

        <input
          type="text"
          name="price"
          placeholder="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="price">price</label>
        <br />

        <input
          type="text"
          name="description"
          placeholder="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="description">description</label>
        <br />

        <input
          type="text"
          name="category"
          placeholder="category"
          value={formData.category}
          onChange={handleChange}
        />
        <label htmlFor="category">category</label>
        <br />

        <input
          type="text"
          name="instock"
          placeholder="instock?"
          value={formData.instock}
          onChange={handleChange}
        />
        <label htmlFor="instock">instock?</label>
        <br />

        <button>add item</button>
      </form>

      <Products />
    </>
  );
}

export default App;