import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./view/register/Register.tsx";
import Login from "./view/login/Login.tsx";
import Home from "./view/home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route path="home" element={<Home />} />
        {/* <Route index element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="catPost/:id" element={<Cat />} />
          <Route path="dogPost/:id" element={<Dog />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
