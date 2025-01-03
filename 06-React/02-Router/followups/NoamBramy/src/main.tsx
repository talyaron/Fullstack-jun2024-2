import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Home from './view/pages/home/Home.tsx';
import About from './view/pages/about/About.tsx';
import Details from './view/pages/about/details/Details.tsx';
import Contact from './view/pages/about/contact/Contact.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
    <Route path="home" element={<Home />}/>
    <Route path="about" element={<About />}>
    <Route index element={<Details />} />
    <Route path="contact" element={<Contact />} />
    </Route>

    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
