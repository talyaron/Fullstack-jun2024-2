import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/pages/home/Home';
import Catalog from './view/pages/catalog/Catalog';
import PetsList from './view/pages/catalog/petsList/PetsList';
import Pet from './view/pages/catalog/pet/Pet';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog" element={<Catalog />}>
          <Route path="cats" element={<PetsList type="cats" />} />
          <Route path="dogs" element={<PetsList type="dogs" />} />
          <Route path="cats/:id" element={<Pet type="cats" />} />
          <Route path="dogs/:id" element={<Pet type="dogs" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;