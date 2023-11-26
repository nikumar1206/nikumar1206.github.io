import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ProjectData } from "../shared/projects";
const Project = ({ project }: { project: ProjectData }) => {
	return (
		<section className="mx-auto dark:text-[#f0f0f0] text-[#202023]">
			<Card className="max-h-[30vh] min-h-[225px] min-w-[350px]">
				<CardHeader>
					<CardTitle>{project.title}</CardTitle>
					<CardDescription className="min-h-[100px] max-h-[12vh]">
						{project.description}
						<span className="mt-2 flex gap-x-3">
							{project.tags.map((tag, i) => (
								<span
									className="bg-gray-200 rounded-full px-3 py-1 w-fit text-sm font-semibold text-gray-700 gap-y-5 max-w-[115px] max-h-[30px] truncate"
									key={i}
								>
									{tag}
								</span>
							))}
						</span>
					</CardDescription>
				</CardHeader>
				{}
				<CardFooter className="flex justify-end gap-x-2">
					<a href={project.githubLink} target="_blank" rel="noreferrer">
						<Button variant={"outline"}>Github</Button>
					</a>
					<a href={project.liveLink} target="_blank" rel="noreferrer">
						<Button variant="default">Live</Button>
					</a>
				</CardFooter>
			</Card>
		</section>
	);
};
export default Project;
