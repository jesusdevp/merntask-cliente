import React, { useReducer } from "react";

import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";

const ProjectState = (props) => {
  const initialState = {
    formulario: false,
  };
  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Funciones del crud
  return (
    <ProjectContext.Provider
      value={{
        formulario: state.formulario,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
