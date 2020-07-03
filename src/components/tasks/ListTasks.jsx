import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const ListTask = () => {
  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyecto, eliminarProyecto } = projectContext;

  //obtener las tareas del proyecto
  const taskContext = useContext(TaskContext);
  const { tareasproyecto } = taskContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h1>Selecciona un proyecto</h1>;

  // Array destructuring - Extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Eliminar proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => <Task key={tarea.id} tarea={tarea} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTask;
