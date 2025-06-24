import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Carrito from './components/Carrito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;
