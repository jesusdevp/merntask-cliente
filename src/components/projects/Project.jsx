import React, { useContext } from "react";

import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const Project = ({ proyecto }) => {
  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyectoActual } = projectContext;

  //obtener la funcion del context de tarea
  const taskContext = useContext(TaskContext);
  const { obtenerTareas } = taskContext;

  //Funcion para agregar proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); //Fijar proyecto actual
    obtenerTareas(id); //Filtrar las tareas cuando se de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Project;
