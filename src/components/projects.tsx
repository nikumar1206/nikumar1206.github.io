import { allProjects } from "../shared/projects";
import Project from "./project";

function Projects() {
	return (
		<section id="projects" className="projects-section">
			<div className="projects-content mt-20">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 text-black">
					{allProjects.map((project, i) => {
						return <Project project={project} key={i} />;
					})}
				</div>
			</div>
		</section>
	);
}
export default Projects;
