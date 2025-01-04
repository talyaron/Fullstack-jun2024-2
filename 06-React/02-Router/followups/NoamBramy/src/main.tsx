import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from './view/pages/home/Home.tsx';
import Pets from './view/pages/home/pets/Pets.tsx';
import Dogs from './view/pages/home/pets/dogs.tsx';
import Dog from './view/pages/home/pet/dog.tsx';
import Cats from './view/pages/home/pets/cats.tsx';
import Cat from './view/pages/home/pet/cat.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
    <Route path="home" element={<Home />}>
    <Route index element={<Pets/>}/>
    <Route path="dogs" element={<Dogs />}/>
    <Route path="dog/:id" element={<Dog />} />
    <Route path="cats" element={<Cats />} />
    <Route path="cat/:id" element={<Cat />} />
    </Route>

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
