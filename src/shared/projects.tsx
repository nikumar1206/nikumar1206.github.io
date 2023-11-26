type BadgeName =
	| "Platform"
	| "Language"
	| "Framework"
	| "Library"
	| "Database"
	| "Other"
	| "Backend"
	| "Frontend"
	| "Testing"
	| "Deployment"
	| "Design"
	| "Version Control"
	| "APIs"
	| "Github"
	| "Live";

export interface Badge {
	name: BadgeName;
	value: string | JSX.Element;
}

export interface ProjectData {
	id: number;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	darkimageUrl?: string;
	liveLink: string;
	githubLink: string;
	badges: Badge[];
	tags: string[];
	notes?: string;
}

export const allProjects: ProjectData[] = [
	{
		id: 1,
		title: "LineAlert",
		description:
			"LineAlert is a safety-focused app that allows users to create and view alerts of ongoing issues in NYC subway stations. Users may also see if hazards will impact their commute.",
		date: "2023-08-06",
		liveLink: "https://aa-linealert.onrender.com/#/",
		githubLink: "https://github.com/leochung97/LineAlert/",
		imageUrl: "/linealert.webp",
		tags: ["React", "MongoDB", "Node.js"],
		badges: [
			{
				name: "Backend",
				value: "Node.js, Express.js, MongoDB",
			},
			{
				name: "Frontend",
				value: "React",
			},
			{
				name: "APIs",
				value: "Google Maps, AWS S3",
			},
			// {
			// 	name: "Github",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://github.com/leochung97/LineAlert/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@github/LineAlert
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
			// {
			// 	name: "Live",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://aa-linealert.onrender.com/#/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@render/LineAlert
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
		],
	},
	{
		id: 2,
		title: "StreetSmart",
		date: "2023-04-20",
		description:
			"StreetSmart is a pixel-perfect clone of StreetEasy, a real-estate search-engine. Users may search for properties, view property details, and save them.",
		liveLink: "https://streetsmart.up.railway.app/#/",
		githubLink: "https://github.com/nikumar1206/StreetSmart",
		imageUrl: "/streetsmart.webp",
		tags: ["React", "Ruby on Rails", "PostgreSQL"],
		badges: [
			{
				name: "Backend",
				value: "Ruby on Rails, PostgreSQL",
			},
			{
				name: "Frontend",
				value: "React",
			},
			{
				name: "APIs",
				value: "Google Maps, AWS S3",
			},
			// {
			// 	name: "Github",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://github.com/nikumar1206/StreetSmart"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@github/StreetSmart
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
			// {
			// 	name: "Live",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://streetsmart.up.railway.app/#/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@railway/StreetSmart
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
		],
	},
	{
		id: 3,
		title: "Way of the Blade",
		date: "2023-04-20",
		description:
			"Inspired by Japanese animation, Way of the Blade is a fighting game playable against a friend or a bot. Built in pure Javascript, with no frameworks or libraries.",
		liveLink: "https://nikhil-kumar.tk/Way-of-The-Blade/",
		githubLink: "https://github.com/nikumar1206/Way-of-The-Blade/",
		imageUrl: "/way_of_the_blade.webp",
		tags: ["JavaScript", "HTML/CSS"],
		badges: [
			{
				name: "Language",
				value: "JavaScript",
			},
			{
				name: "Deployment",
				value: "GitHub Pages",
			},
			// {
			// 	name: "Github",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://github.com/nikumar1206/Way-of-The-Blade/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@github/Way-of-The-Blade/
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
			// {
			// 	name: "Live",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://nikhil-kumar.tk/Way-of-The-Blade/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@nikhil-kumar.tk/Way-of-The-Blade/
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
		],
	},
	{
		id: 4,
		title: "Personal Website",
		date: "2023-09-10",
		description:
			"My personal website, built with some of my favorite technologies and host to my blog. This website is always a work in progress.",
		liveLink: "https://nikhil-kumar.tk/",
		githubLink: "https://github.com/nikumar1206/nikumar1206.github.io",
		imageUrl: "/portfolio.webp",
		darkimageUrl: "/portfolio_dark.webp",
		tags: ["React", "TypeScript"],
		badges: [
			{
				name: "Language",
				value: "TypeScript",
			},
			{
				name: "Framework",
				value: "React",
			},
			// {
			// 	name: "Github",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://nikhil-kumar.tk/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@github/nikumar1206
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
			// {
			// 	name: "Live",
			// 	value: (
			// 		<div className="inline-flex gap-x-2 align-middle leading-4">
			// 			<a
			// 				href="https://aa-linealert.onrender.com/#/"
			// 				target="_blank"
			// 				rel="noreferrer"
			// 				className="text-[.8rem] hover:underline"
			// 			>
			// 				@nikhil-kumar.tk
			// 			</a>
			// 			<FiExternalLink style={{ fontSize: "15" }} />
			// 		</div>
			// 	),
			// },
		],
	},
];
