import React, { useContext, useState, useEffect } from "react";
import ProjectContext from "../../context/projects/projectContext";
import TaskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //Extraer si un proyecto esta activo
  const projectContext = useContext(ProjectContext);
  const { proyecto } = projectContext;

  //obtener la funcion del context de tarea
  const taskContext = useContext(TaskContext);
  const {
    tareaseleccionada,
    errortarea,
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
      return;
    }

    // Si es edicion o si es nueva tarea
    if (tareaseleccionada === null) {
      //Agregar nueva tarea al state
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      //Actualizar tarea existente
      actualizarTarea(tarea);

      // Elimina tareaseleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto actual
    obtenerTareas(proyectoActual.id);

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
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTask;
