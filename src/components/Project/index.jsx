import "./Project.css";
import { projects } from "../../data";
import ProjectCard from "../../ui/ProjectCard"; 

const Project = () => {
  return (
    <section id="projects"> 
      <div className="section_wrapper">
        <div className="section_header">
          <h2 className="shine Topic">Projects</h2>
        </div>
        <div className="projects_container">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))
          ) : (
            <p className="no-projects">No projects available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
