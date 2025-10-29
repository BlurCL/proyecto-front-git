import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';

function Registrarse() {
  return <h1>¡Hola desde la pestaña registrarse!</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/registrarse" element={<Registrarse />} />
      </Routes>
    </Router>
  );
}

export default App;

