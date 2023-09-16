import NeuButton from "./button";

const Bio = () => {
	return (
		<section className="mx-auto mt-[3rem] flex flex-col gap-y-4">
			<span className="">
				I&apos;m a software engineer at the Machine Learning Center of
				Excellence (MLCoE) at{" "}
				<a
					className="text-[var(--blue)] inline hover:underline"
					href="https://www.jpmorgan.com/technology/applied-ai-and-ml/machine-learning"
					target="_blank"
					rel="noopener noreferrer"
				>
					JPMorgan Chase
				</a>
				. Passionate about cloud computing, machine learning, and building
				performant backends. In my free time, I enjoy playing tennis,
				weightlifting, and spending time with my family.
			</span>
			<div className="flex flex-col lg:flex-row sm:flex-col gap-y-3 justify-end gap-x-3 w-[90%]">
				<a
					href="https://drive.google.com/file/d/1ktc9Q_f0z6emR8xdkJbzD7Bg8msQBUSd/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NeuButton text="Resume" />
				</a>
				<a
					href="https://www.linkedin.com/in/nikhilk99/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<NeuButton text="Contact Me" />
				</a>
			</div>
		</section>
	);
};
export default Bio;
