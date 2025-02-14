import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { store } from './store.ts'
import Dogs from './view/Dogs.tsx'
import Dog from './view/Dog.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
      <BrowserRouter>
      <StrictMode>

      <Routes>
          <Route path="/" element={<App />} >

          </Route>
          <Route path="dogs" element={<Dogs />} >
            <Route path=":dog" element={<Dog />} >
            </Route>

          </Route>
        </Routes>
  </StrictMode>,
  </BrowserRouter>
  </Provider>
)
