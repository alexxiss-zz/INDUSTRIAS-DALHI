import './Register.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/iniciar-sesion");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
  <div className="register-container">
    <h2>Registro</h2>
    <form className="register-form" onSubmit={handleRegister}>
      <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
    <p className="login-link">
    ¿Ya tienes una cuenta? <span onClick={() => navigate("/iniciar-sesion")}>Inicia sesión aquí</span>
    </p>

  </div>
);

}

export default Register;
