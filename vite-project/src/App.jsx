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
          <Link to="/" className="Home">Home</Link>
          <Link to="/informatica" className="Informatica">Informatica</Link>
          <Link to="/mapa" className="Mapa">Mapa</Link>
          <Link to="/Fav" className="Fav">Favoritos</Link>
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
    /*https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/municipios-60.json*/ 
  )
}

export default App
