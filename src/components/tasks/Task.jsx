import React, { useContext } from "react";
import TaskContext from "../../context/tasks/taskContext";
import ProjectContext from "../../context/projects/projectContext";

const Task = ({ tarea }) => {
  //obtener la funcion del context de tarea
  const taskContext = useContext(TaskContext);
  const {
    eliminarTarea,
    obtenerTareas,
    actualizarTarea,
    guardarTareaActual,
  } = taskContext;

  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  //Extraer el proyecto
  const [proyectoActual] = proyecto;

  //Funcion cuando es click en eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual._id);
  };

  //Funcion que modfica el estado de las tareas
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };

  //Agrega tarea acttual cuando el usuario desea editar
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          typt="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
