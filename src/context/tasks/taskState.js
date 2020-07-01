import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import { TAREAS_PROYECTO } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir platafromas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir platafromas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 4 },
      { nombre: "Elegir colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir platafromas de pago", estado: false, proyectoId: 2 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir platafromas de pago", estado: false, proyectoId: 3 },
    ],
  };

  // Crear dispatch y state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tareas: state.tareas,
        obtenerTareas,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
