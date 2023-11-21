import { useTheme } from "../hooks/themeHook";
import { ProjectData } from "../shared/projects";
import Badge from "./badge";

const Project = ({ project }: { project: ProjectData }) => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	function backgroundImage() {
		if (!isDark) {
			return project.darkimageUrl ?? project.imageUrl;
		}
		return project.imageUrl;
	}
	return (
		<section
			className={` mx-auto ${isDark ? "text-[#f0f0f0]" : "text-[#202023]"}`}
		>
			<div>
				<h3 className="text-center font-semibold text-lg my-1">
					{project.title}
				</h3>
				<div
					style={{ backgroundImage: `url(${backgroundImage()})` }}
					className={`${backgroundImage()} w-[85%] lg:w-[20vw] h-[14vh] lg:h-[20vh] bg-cover mx-auto object-cover rounded-md`}
				></div>
				<p className="text-center w-[85%] lg:w-[20vw]  mx-auto py-2">
					{project.description}
				</p>
				<div className="flex flex-col gap-y-2 justify-center text-center h-full">
					{project.badges.map((badge, i) => (
						<Badge {...badge} key={i} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Project;
