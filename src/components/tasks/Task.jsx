import React, { useContext } from "react";
import TaskContext from "../../context/tasks/taskContext";
import ProjectContext from "../../context/projects/projectContext";

const Task = ({ tarea }) => {
  //obtener la funcion del context de tarea
  const taskContext = useContext(TaskContext);
  const { eliminarTarea, obtenerTareas } = taskContext;

  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  //Funcion cuando es click en eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          typt="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
