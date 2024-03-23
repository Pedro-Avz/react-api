import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardListCarros from './CardListCarros';
import CardFormCarro from './CardFormCarro';
import CardEditCarro from './CardEditCarro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardListCarros />} /> 
        <Route path="/criar-carro" element={<CardFormCarro />} />
        <Route path="/editar/:id" element={<CardEditCarro />} />
      </Routes>
    </Router>
  );
}

export default App;
