import logo from '../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Usa los estilos del navbar/sidebar

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" />
          <span>INDUSTRIAS DALHI</span>
        </div>
        <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
          &#9776;
        </button>
      </nav>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        <Link to="/home">Productos</Link>
        <Link to="/carrito">🛒 Carrito</Link>
        <Link to="/iniciar-sesion">Cerrar sesión</Link>
      </aside>

      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;