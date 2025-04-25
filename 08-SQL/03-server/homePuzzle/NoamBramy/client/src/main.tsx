import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './view/pages/login/Login.tsx'
import Register from './view/pages/register/Register.tsx'
import AddProduct from './view/pages/products/AddProduct.tsx'
import AllProducts from './view/pages/products/AllProducts.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products" element={<AllProducts />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
