import './Home.css';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const categorias = [
  'Todos',
  'Cera en pasta',
  'Lejía',
  'Limpiavidrios',
  'Desodorizante para baño',
  'Perfumadores',
  'Desinfectantes',
  'Quitasarro',
  'Silicona',
];

function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      const productosRef = collection(db, 'productos');
      const snapshot = await getDocs(productosRef);
      const productosData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosData);
      setLoading(false);
    };
    fetchProductos();
  }, []);

  const productosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? productos
      : productos.filter(
          p => p.categoria && p.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );

  const productosBuscados = busqueda
    ? productosFiltrados.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      )
    : productosFiltrados;

  const handleAgregar = (producto) => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const existente = carrito.find(p => p.id === producto.id);

    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    setMensaje('Producto agregado al carrito');
    setTimeout(() => setMensaje(''), 1500);
  };

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
        <Link to="/">Productos</Link>
        <Link to="/carrito">🛒 Carrito</Link>
        <Link to="/iniciar-sesion">Cerrar sesión</Link>
      </aside>

      <div className="filtro-categorias">
        {categorias.map(cat => (
          <button
            key={cat}
            className={categoriaSeleccionada === cat ? 'categoria-activa' : ''}
            onClick={() => setCategoriaSeleccionada(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="barra-busqueda">
        <span className="icono-busqueda">&#128269;</span>
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      {mensaje && <div className="mensaje-carrito">{mensaje}</div>}

      <main className="catalogo">
        {loading ? (
          <p>Cargando productos...</p>
        ) : productosBuscados.length === 0 ? (
          <p>No hay productos en esta categoría.</p>
        ) : (
          productosBuscados.map((producto) => (
            <div className="producto-card" key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
              <p>S/ {producto.price}</p>
              <button onClick={() => handleAgregar(producto)}>Agregar al carrito</button>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

export default Home;
