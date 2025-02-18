import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter, Routes, Route } from "react-router";
import DogPage from "./view/pages/dogs/DogPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          <Route path=":dog" element={<DogPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
