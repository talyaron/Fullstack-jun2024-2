import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Catalog from "./view/pages/catalog/Catalog.tsx";
import Cats from "./view/pages/catalog/cats/Cats.tsx";
import Dogs from "./view/pages/catalog/dogs/Dogs.tsx";
import Cat from "./view/pages/catalog/cats/cat/Cat.tsx";
import Dog from "./view/pages/catalog/dogs/Dog/Dog.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="catalog" element={<Catalog />}>
          <Route index element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="catPost/:id" element={<Cat />} />
          <Route path="dogPost/:id" element={<Dog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
