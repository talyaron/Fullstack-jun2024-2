import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './view/pages/home/Home.tsx'
import About from './view/pages/about/About.tsx'
import Profile from './view/pages/home/profile/Profile.tsx'
import Posts from './view/pages/home/posts/Posts.tsx'
import Post from './view/pages/home/post/Post.tsx'
import Dogs from './view/pages/home/dogsList/DogsList.tsx'
import DogInformation from './view/pages/home/dogInformation/DogInformation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
     <Routes>
       <Route index element={<App />} />
       <Route path="home" element={<Home />}>
         <Route index element={<Posts />} />
         <Route path="about" element={<About />} />
         <Route path="profile" element={<Profile />} />
         <Route path="post/:id" element={<Post />} />
         <Route path="dogs" element={<Dogs />} />
         <Route path="dog/:id" element={<DogInformation />} />
       </Route>
     </Routes>
</BrowserRouter>
  </StrictMode>,
)
