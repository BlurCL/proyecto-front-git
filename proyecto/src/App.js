import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registrarse from "./Paginas/Registrarse";
import Catalogo from "./Paginas/Catalogo";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}

export default App;

