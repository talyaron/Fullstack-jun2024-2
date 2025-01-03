import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './view/pages/about/About.tsx';
import Home from './view/pages/home/Home.tsx';
import Posts from './view/pages/home/posts/Post.tsx'
import Profile from './view/pages/home/profile/Profile.tsx';
import Yonatan from './view/pages/about/yonatan/Yonatan.tsx';
import Project from './view/pages/about/project/Project.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="about" element={<About />}>
      <Route index element={<Yonatan />}></Route>
      <Route path='project' element={<Project />}></Route>
      </Route> 
      <Route path="home" element={<Home />}>
      <Route index element={<Posts />}/> 
      <Route path='profile' element={<Profile />}/> 
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
