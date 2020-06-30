import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

import { FORMULARIO_PROYECTO } from "../../types";

const ProjectState = (props) => {
  const initialState = {
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
  return (
    <ProjectContext.Provider
      value={{
        formulario: state.formulario,
        mostrarFormulario,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
