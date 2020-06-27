import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Intranet" },
    { nombre: "Diseño" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => (
        <Project proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListProjects;
