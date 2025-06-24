import './Carrito.css';
import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(carritoGuardado);
  }, []);

  const actualizarCantidad = (index, nuevaCantidad) => {
    const copia = [...carrito];
    copia[index].cantidad = nuevaCantidad;
    setCarrito(copia);
    localStorage.setItem('carrito', JSON.stringify(copia));
  };

  const eliminarProducto = (index) => {
    const copia = carrito.filter((_, i) => i !== index);
    setCarrito(copia);
    localStorage.setItem('carrito', JSON.stringify(copia));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  };

  const total = carrito.reduce(
    (sum, item) => sum + item.price * item.cantidad,
    0
  );

  return (
    <Layout>
      <div className="carrito-container">
        <h2>Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="carrito-items">
              {carrito.map((item, index) => (
                <div className="carrito-item" key={index}>
                  <img src={item.imagen} alt={item.nombre} />
                  <div>
                    <h3>{item.nombre}</h3>
                    <p>Precio: S/ {item.price}</p>
                    <p>
                      Cantidad:{" "}
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad}
                        onChange={(e) =>
                          actualizarCantidad(index, parseInt(e.target.value))
                        }
                      />
                    </p>
                    <p>Total: S/ {item.price * item.cantidad}</p>
                    <button onClick={() => eliminarProducto(index)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h3>Total del pedido: S/ {total}</h3>
            <div className="carrito-botones">
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
              <button onClick={() => alert("Ir a formulario de pedido")}>
                Realizar pedido
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export default Carrito;
