import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './view/component/products/Product'
import ProductForm from './view/component/productForm/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProductForm></ProductForm>
      <Product></Product>
    </>
  )
}

export default App
