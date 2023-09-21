import { useState } from "react";
import { Tb360 } from "react-icons/tb";
import { useTheme } from "../hooks/themeHook";
import { ProjectData } from "../shared/projects";
import Badge from "./badge";
import NeuButton from "./button";

const Project = ({ project }: { project: ProjectData }) => {
	const [backVisible, setBackVisible] = useState(false);
	const { theme } = useTheme();
	const isDark = theme === "dark";
	const flipCard = () => {
		setBackVisible(!backVisible);
	};
	function backgroundImage() {
		if (!isDark) {
			return project.darkimageUrl ?? project.imageUrl;
		}
		return project.imageUrl;
	}
	return (
		<article className="revealz w-[325px] h-[420px] bg-transparent group perspective">
			<div
				className={`relative preserve-3d ${
					backVisible ? "my-rotate-y-180" : ""
				} w-[325px] h-full duration-1000`}
			>
				<div
					className={`absolute backface-hidden w-[325px] h-full project flex flex-col will-change-transform`}
				>
					<div
						style={{ backgroundImage: `url(${backgroundImage()})` }}
						className={`${backgroundImage()} w-[325px] h-[175px] bg-cover`}
					></div>
					<h3 className="proj-title my-3">{project.title}</h3>
					<p className="proj-description px-1">{project.description}</p>
					<div className="proj-buttons mt-[10%]">
						<a href={project.liveLink} target="_blank" rel="noreferrer">
							<NeuButton text="Live" />
						</a>
						<a href={project.githubLink} target="_blank" rel="noreferrer">
							<NeuButton text="GitHub" />
						</a>
					</div>
					<div
						onClick={flipCard}
						className="absolute bottom-0 right-0 mr-2 mb-2 bg-[#fefefe] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
					>
						<Tb360 />
					</div>
				</div>
				<div className="project absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
					<div className="flex flex-col text-gray-800 h-full">
						<img
							src={
								isDark
									? project.imageUrl
									: project.darkimageUrl ?? project.imageUrl
							}
							alt={project.title}
						/>
						<div className="flex flex-col gap-y-2 justify-center text-center h-full px-2">
							{project.badges.map((badge, i) => (
								<Badge {...badge} key={i} />
							))}
						</div>
						<div
							onClick={flipCard}
							className="absolute bottom-0 right-0 mr-2 mb-2 bg-[#fefefe] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer"
						>
							<Tb360 />
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};
export default Project;
