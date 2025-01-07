import React from "react";
import { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Posts from "./pages/Posts.tsx";
import Post from "./pages/Post.tsx";
import Contact from "./pages/Contacts.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
