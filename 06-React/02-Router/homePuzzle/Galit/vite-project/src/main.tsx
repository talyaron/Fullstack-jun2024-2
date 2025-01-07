import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './view/pages/home/Home.tsx'

import Cats from './view/pages/cats/Cats.tsx'
import Dogs from './view/pages/dogs/Dogs.tsx'
import Cat from './view/pages/cat/Cat.tsx'
import Dog from './view/pages/dog/Dog.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="cats" element={<Cats />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="cats/:id" element={<Cat />} />
        <Route path="dogs/:id" element={<Dog />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

