import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './View/Login.tsx'
import Register from './View/Register.tsx'
import LRpage from './View/LRpage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LRpage />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} /></Route>
    </Routes>
</BrowserRouter>
)
/*  <Route path="about" element={<About />} />
  <Route path="home" element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="profile" element={<Profile />} /></Route>*/