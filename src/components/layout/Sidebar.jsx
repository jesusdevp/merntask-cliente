import React from "react";
import NewProject from "../projects/NewProject";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN <span>Tasks</span>{" "}
      </h1>

      <NewProject />

      <div className="proyectos">
        <h2>Tus Proyectos</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
