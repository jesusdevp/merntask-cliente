import React, { useContext, useEffect } from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ListProjects = () => {
  //Esxtraer Proyectos
  const projectContext = useContext(ProjectContext);
  const { proyectos, obtenerProyectos } = projectContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  //validar si existen proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={200} classNames="proyecto">
            <Project proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
