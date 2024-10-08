import { React, useState, useEffect } from "react";
import { project } from "../Details/Details";
import SingleProject from "../Components/SingleProject";

function Projects() {
  const [all_projects, set_all_projects] = useState([]);

  useEffect(() => {
    let proj = [];
    for (let i = 0; i < project.length; i++) {
      let desc_arr = [];

      for (let j = 0; j < project[i].description.length; j++) {
        desc_arr.push(<li>{project[i].description[j]}</li>);
      }

      proj.push(
        <SingleProject
          index={i}
          size={project.length}
          project_name={project[i].project_name}
          tech_stack={project[i].tech_stack}
          github={project[i].github}
          youtube={project[i].youtube}
          description={<ul>{desc_arr}</ul>}
        />
      );
    }

    set_all_projects(proj);
  }, []);

  return (
    <>
      <div className="project_parent">
        <h1 className="project_h1">Projects</h1>
        {all_projects}
      </div>
    </>
  );
}

export default Projects;
