import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectList = projects.map((project) => {
    const { id, name, about, technologies } = project;
    return <div key={id}><ProjectItem key={id} about={about} name={name} technologies={technologies} /></div>
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
