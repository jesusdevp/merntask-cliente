import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Signup = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya registrado o sea un registro duplicado

  useEffect(() => {
    if (autenticado) {
      props.history.push("/projects");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    // eslint-disable-next-line
  }, [mensaje, autenticado, props.history]);

  //state para registrarse
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //estraer de usuario

  const { nombre, email, password, confirmar } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    // Password minimo de 6 carateres
    if (password.length < 6) {
      mostrarAlerta(
        "El password deber ser al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    // Los 2 passwords son iguales
    if (password !== confirmar) {
      mostrarAlerta("Los passwords no son iguales", "alerta-error");
    }

    // Pasarlo al action
    registrarUsuario({
      nombre,
      email,
      password,
    });
  };

  return (
    <section className="signup">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
      <section className="signup__container">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit} className='signup__container--form'>
        <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={handleChange}
              className='input'
            />
          <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={handleChange}
              className='input'
            />
          <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={handleChange}
              className='input'
            />
           <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              value={confirmar}
              onChange={handleChange}
              className='input'
            />
          <button
              type="submit"
              className="button"
              value="Registrarme"
            >Registrarme</button>
        </form>
        <p className="signup__container--register">
        <Link to={"/"} >
          Volver a Iniciar Sesión
        </Link>
        </p>
        
      </section>
    </section>
  );
};

export default Signup;
