import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";

const Project = ({ proyecto }) => {
  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyectoActual } = projectContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Project;
