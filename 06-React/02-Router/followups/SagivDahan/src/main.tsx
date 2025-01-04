import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './view/home/Home.tsx'
import Posts from './view/home/posts/Posts.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App/>}/>
        <Route path="home" element={<Home/>}/>
        <Route index element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
