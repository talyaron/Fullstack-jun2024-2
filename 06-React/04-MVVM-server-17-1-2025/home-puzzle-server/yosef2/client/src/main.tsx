import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./App.tsx"
import { BrowserRouter, Route, Routes } from 'react-router'
import ToDoMainPage from './view/components/toDo/ToDoMainPage.tsx'
import Register from './view/components/register/register.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="todo" element={<ToDoMainPage />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="login" element={<LRpage />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} /></Route> */}
    </Routes>
</BrowserRouter>
)