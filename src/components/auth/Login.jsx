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
    // eslint-disable-next-line
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
    <section className="login">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
      <section className="login__container">
          <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className='login__container--form'>
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
          <button
              type="submit"
              className="button"
              value="Iniciar Sesión"
            >Iniciar Sesión</button>
        </form>
        <p className="login__container--register">No tienes una cuenta
        <Link to={"./signup"} >
          Registrate
        </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
