// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MeuComponente from './paginas/login.js';
import Dashboard from './paginas/dashboard.js';
import NovoUsuario from './paginas/novoUsuario.js'; // A página de criação de usuário

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MeuComponente />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/novousuario" element={<NovoUsuario />} /> {/* Rota para a criação de usuário */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;