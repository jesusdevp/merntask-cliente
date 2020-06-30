import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from "../../types";

const ProjectState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Intranet" },
    { id: 3, nombre: "Diseño" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
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

  return (
    <ProjectContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
