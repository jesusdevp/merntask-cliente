import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alerts/alertContext";
import AuthContext from "../../context/authentication/authContext";

const Login = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, iniciarSesion } = authContext;

  // ENcaso de que el password o el usuario no existan
  useEffect(() => {
    if (autenticado) {
      props.history.push("/projects");
    }

    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
  }, [mensaje, autenticado, props.history]);

  //state para iniciar sesion
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  //estraer de usuario

  const { email, password } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    // Pasarlo al action
    iniciarSesion({ email, password });
  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={"./signup"} className="enlace-cuenta">
          Crear Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
