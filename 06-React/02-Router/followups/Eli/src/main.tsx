import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
  <Route path="about" element={<About />} />
  <Route path="home" element={<Home />}>
          <Route index element={<Posts />} />
          <Route path="profile" element={<Profile />} /></Route>
    </Routes>
  </BrowserRouter>
);