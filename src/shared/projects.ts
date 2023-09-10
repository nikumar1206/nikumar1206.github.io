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
	| "APIs";

export interface Badge {
	name: BadgeName;
	value: string;
}

export interface ProjectData {
	id: number;
	title: string;
	description: string;
	date: string;
	imageUrl: string;
	liveLink: string;
	githubLink: string;
	badges: Badge[];
	notes?: string;
}

export const allProjects: ProjectData[] = [
	{
		id: 1,
		title: "LineAlert",
		description:
			"LineAlert is a safety-focused app that allows users to create and view alerts of ongoing issues in NYC subway stations.",
		date: "2023-08-06",
		liveLink: "https://aa-linealert.onrender.com/#/",
		githubLink: "",
		imageUrl: "/linealert.webp",
		badges: [
			{
				name: "Platform",
				value: "Web",
			},
			{
				name: "Database",
				value: "MongoDB",
			},
			{
				name: "Backend",
				value: "Node.js, Express.js",
			},
			{
				name: "Frontend",
				value: "React",
			},
			{
				name: "APIs",
				value: "Google Maps, AWS S3",
			},
			{
				name: "Deployment",
				value: "Render",
			},
		],
	},
	{
		id: 2,
		title: "StreetSmart",
		date: "2023-04-20",
		description:
			"StreetSmart is a pixel-perfect clone of StreetEasy, a real-estate search-engine.",
		liveLink: "https://streetsmart.up.railway.app/#/",
		githubLink: "https://github.com/nikumar1206/StreetSmart",
		imageUrl: "/streetsmart.webp",
		badges: [
			{
				name: "Platform",
				value: "Web",
			},
			{
				name: "Database",
				value: "PostgreSQL",
			},
			{
				name: "Backend",
				value: "Ruby on Rails",
			},
			{
				name: "Frontend",
				value: "React",
			},
			{
				name: "APIs",
				value: "Google Maps, AWS S3",
			},
			{
				name: "Deployment",
				value: "Railway",
			},
		],
	},
	{
		id: 3,
		title: "Way of the Blade",
		date: "2023-04-20",
		description:
			"Inspired by Japanese animation, Way of the Blade is a fighting game playable against a friend or a bot.",
		liveLink: "https://nikhil-kumar.tk/Way-of-The-Blade/",
		githubLink: "https://github.com/nikumar1206/Way-of-The-Blade/",
		imageUrl: "/way_of_the_blade.webp",
		badges: [
			{
				name: "Platform",
				value: "Web",
			},
			{
				name: "Language",
				value: "JavaScript",
			},
			{
				name: "Deployment",
				value: "GitHub Pages",
			},
		],
	},
];
