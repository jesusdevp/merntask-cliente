import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //Obtener el state del formulario
  const projectContext = useContext(ProjectContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = projectContext;

  //state para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  //Extraer nombre
  const { nombre } = proyecto;

  // Lee nombre del proyecto
  const handleChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  //Envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar el proyecto
    if (nombre === "") {
      mostrarError();
      return;
    }

    //agregar al state
    agregarProyecto(proyecto);

    //Reiniciar el form
    setProyecto({
      nombre: "",
    });
  };

  //Mostrar el formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={handleChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
