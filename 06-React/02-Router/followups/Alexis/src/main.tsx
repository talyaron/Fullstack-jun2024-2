import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Posts from "./pages/Posts.tsx";
import Post from "./pages/Post.tsx";
import Contacts from "./pages/Contacts.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="about" element={<About />} />
          <Route path="post/:id" element={<Post />} />

        </Route>
        <Route path="contacs" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
