import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/login/Login.tsx";
import Register from "./components/register/Register.tsx";
import AddProduct from "./pages/addProduct/AddProduct.tsx";
import Checkout from "./pages/checkout/Checkout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
