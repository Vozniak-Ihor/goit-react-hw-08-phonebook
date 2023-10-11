import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import Home from '../../pages/Home/Home';
import Catalog from '../../pages/Catalog/Catalog';
import Favorites from '../../pages/Favorites/Favorites';

function App() {
 return (
  <Routes>
   <Route path="/" element={<AppBar />}>
    <Route index element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<Navigate to="/" replace />} />
   </Route>
  </Routes>
 );
}

export default App;
