import React, { useReducer } from "react";

import { v4 as uuidv4 } from "uuid";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../../types";

const ProjectState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
  };
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Funciones del crud
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //obtener estos proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  //Agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();

    //Insertar el proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  // Valida el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
