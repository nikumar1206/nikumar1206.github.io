import NeuButton from "./button";

const Bio = () => {
	return (
		<section className="mx-auto mt-[3rem] flex flex-col gap-y-4">
			<div>
				<h2 className="headers">Bio:</h2>
				<span className="">
					I&apos;m a software engineer at the Machine Learning Center of
					Excellence (MLCoE) at
					<span className="text-[var(--blue)] inline"> JPMorgan Chase</span>.
					Passionate about cloud computing, machine learning, and building
					performant backends. In my free time, I enjoy playing tennis,
					weightlifting, and spending time with my family.
				</span>
			</div>
			<div className="flex justify-end gap-x-3 w-[90%]">
				<a
					href="https://drive.google.com/file/d/1Dcz1nOLtwLO9bXxG7dD64-GCE5xsaA07/view?usp=sharing"
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
