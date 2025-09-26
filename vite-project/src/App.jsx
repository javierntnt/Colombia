import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Componentes/Home/Index'
import Fav from './Componentes/Fav/Index'
import Detalles from './Componentes/Detalles/Index'
import Original from './Componentes/Original/Index'
import Informatica from './Componentes/Informatica/Index'
function App() {
  return (
    <>
    <Router>
       <nav className="c-menu">
          <Link to="/" class="Home">Home</Link>
          <Link to="/informatica" class="Informatica">Informatica</Link>
          <Link to="/mapa" class="Mapa">Mapa</Link>
          <Link to="/Fav" class="Fav">Favoritos</Link>
        </nav>       
      <Routes>
        <Route path="/" element={<Home /> } />
          <Route path="/Informatica" element={<Informatica /> } />
          <Route path="/mapa" element={<Original /> } />
          <Route path="/Fav" element={<Fav /> } />
          <Route path="/detalles/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
