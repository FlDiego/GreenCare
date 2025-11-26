import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Paginas
import Home from './pages/Home';
import Tips from './pages/Tips';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        {/* HEADER: Visible en todas las páginas */}
        <header role="banner">
          <div className="header-inner">
            <div className="logo">
              <h1>GreenCare</h1>
            </div>
            
            <nav aria-label="Menú principal">
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/consejos">Consejos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* MAIN: El contenido cambia aquí */}
        <main id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consejos" element={<Tips />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* FOOTER: Visible en todas las páginas */}
        <footer role="contentinfo">
          <p>© 2025 GreenCare | Contacto: info@greencare.com</p>
        </footer>

      </div>
    </Router>
  );
}

export default App;