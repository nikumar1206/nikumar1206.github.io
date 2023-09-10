import { allProjects } from "../shared/projects";
import Project from "./project";

function Projects() {
	return (
		<section id="projects" className="projects-section">
			<div className="projects-content mt-20">
				<div className="projects-container">
					{allProjects.map((project, i) => {
						return <Project project={project} key={i} />;
					})}
				</div>
			</div>
		</section>
	);
}
export default Projects;
