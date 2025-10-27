import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Toggle from './components/Toggle.jsx'


function App() {

  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar de navegación */}
        <nav className="navbar" style={{borderRadius:3}}>
          <div className="nav-brand"><a href='/Home'>Super Mendoza Market</a></div>
          <div className="nav-links">
            <Link to="/">Inicio</Link>
            <Link to="/About">Nosotros</Link>
            <Link to="/products">Productos</Link>
            <Link to="/contact">Contacto</Link>
          </div>
        </nav>

        {/* Contenido que cambia según la ruta */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© SMM 2025 - Todos los derechos reservados</p>
        </footer>
      </div>
    </BrowserRouter>

  )
}

export default App
