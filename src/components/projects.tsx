import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { allProjects } from "../shared/projects";
import Project from "./project";

const routeVariants = {
	initial: {
		y: "2vh",
		opacity: 0,
	},
	final: {
		y: "0vh",
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.4,
		},
	},
} as Variants;

function Projects() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		function onPageLoad() {
			setLoaded(true);
		}
		if (document.readyState === "complete") {
			onPageLoad();
			return;
		}

		window.addEventListener("load", onPageLoad);
		return () => {
			window.removeEventListener("load", onPageLoad);
		};
	}, []);
	if (!loaded) {
		return null;
	}

	return (
		<motion.section
			id="projects"
			className="md:w-[60%] w-[80%] mx-auto mt-16 flex flex-col gap-y-3"
			variants={routeVariants}
			initial="initial"
			animate="final"
		>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 text-black">
				{allProjects.map((project, i) => {
					return <Project project={project} key={i} />;
				})}
			</div>
		</motion.section>
	);
}
export default Projects;
