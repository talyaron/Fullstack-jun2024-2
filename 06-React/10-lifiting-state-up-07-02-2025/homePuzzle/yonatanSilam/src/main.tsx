import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Man from "./view/pages/man/Man.tsx";
import Woman from "./view/pages/woman/woman.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="man" element={<Man />} />
          <Route path="woman" element={<Woman />} />

          {/* <Route path="home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
