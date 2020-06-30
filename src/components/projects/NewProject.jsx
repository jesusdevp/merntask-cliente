import React, { Fragment, useState, useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //Obtener el state del formulario
  const projectContext = useContext(ProjectContext);
  const { formulario } = projectContext;

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
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
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
    </Fragment>
  );
};

export default NewProject;
