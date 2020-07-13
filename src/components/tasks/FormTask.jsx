import React, { useContext, useState, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";
import AlertaContext from "../../context/alerts/alertContext";

const FormTask = () => {
  //Extraer si un proyecto esta activo
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //obtener la funcion del context de tarea
  const taskContext = useContext(TaskContext);
  const {
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = taskContext;

  // Effect que detecta si hay una tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  //state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });

  //extraer nombre del proyecto
  const { nombre } = tarea;

  //Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring - Extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === "") {
      validarTarea();
      mostrarAlerta("El nombre de la tarea es obligatorio", "mensaje error");
      return;
    }

    // Si es edicion o si es nueva tarea
    if (tareaseleccionada === null) {
      //Agregar nueva tarea al state
      tarea.proyecto = proyectoActual._id;

      agregarTarea(tarea);
    } else {
      //Actualizar tarea existente
      actualizarTarea(tarea);

      // Elimina tareaseleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual._id);

    //reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea..."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>
      ) : null}
    </div>
  );
};

export default FormTask;
