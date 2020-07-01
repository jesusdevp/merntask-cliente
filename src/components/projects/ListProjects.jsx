import React, { useContext, useEffect } from "react";
import Project from "./Project";
import ProjectContext from "../../context/projects/projectContext";

const ListProjects = () => {
  //Esxtraer Proyectos
  const projectContext = useContext(ProjectContext);
  const { proyectos, obtenerProyectos } = projectContext;

  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);

  //validar si existen proyectos
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Project key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListProjects;
