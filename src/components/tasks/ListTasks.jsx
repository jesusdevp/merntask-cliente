import React, { Fragment, useContext } from "react";
import Task from "./Task";
import ProjectContext from "../../context/projects/projectContext";

const ListTask = () => {
  //Extraer el state de proyectos
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  //Si no hay proyecto seleccionado
  if (!proyecto) return <h1>Selecciona un proyecto</h1>;

  // Array destructuring - Extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir colores", estado: false },
    { nombre: "Elegir platafromas de pago", estado: false },
    { nombre: "Elegir hosting", estado: true },
  ];

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Task tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListTask;
