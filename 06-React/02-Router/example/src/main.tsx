import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './view/styles/style.scss'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './view/pages/about/About.tsx'
import Home from './view/pages/home/Home.tsx'
import Posts from './view/pages/home/posts/Posts.tsx'
import Profile from './view/pages/home/profile/Profile.tsx'
import Post from './view/pages/home/post/Post.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />}>
          <Route index element={<Posts />} />      
          <Route path="profile" element={<Profile />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
