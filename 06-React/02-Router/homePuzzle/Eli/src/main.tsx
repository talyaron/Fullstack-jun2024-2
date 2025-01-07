import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from "react";

import App from "./App.tsx";
import Home from "./view/Home.tsx";
import Cats from "./view/Cats.tsx";
import Dogs from "./view/Dogs.tsx";
import { Outlet } from "react-router";
import CatBreed from "./view/CatBreed.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="cats" element={<Cats />}/>
          <Route path="cats/:catBreed" element={<CatBreed />} />
          
          <Route path="dogs" element={<Dogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
// <Route path="cats/:id" element={<Cat />} />
//<Route path="dogs/:id" element={<Dog />} />
