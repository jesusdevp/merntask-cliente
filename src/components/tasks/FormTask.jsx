import React, { useContext } from "react";
import ProjectContext from "../../context/projects/projectContext";

const FormTask = () => {
  //Extraer si un proyecto esta activo
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring - Extraer el proyecto actual
  const [proyectoActual] = proyecto;
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="sumit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
