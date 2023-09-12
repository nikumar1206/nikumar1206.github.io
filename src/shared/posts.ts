export interface PostData {
	id: number;
	title: string;
	date: string;
	description: string;
	body?: string;
	link: string;
	tags: string[];
}

export const allPosts: PostData[] = [
	{
		id: 3,
		title: "Migrating JS Apps to Bun: A Series",
		date: "2023-09-11",
		tags: ["bun", "javascript", "migrating", "typescript", "vscode", "react"],
		description: "A guide to migrating your JavaScript apps to Bun (Part 1)",
		link: "/post/3",
	},

	{
		id: 2,
		title: "What's new in Python 3.12",
		date: "2023-08-06",
		tags: ["python", "3.12", "typing", "vscode"],
		description:
			"A brief overview of the important features coming to Python 3.12. Subject to change",
		link: "/post/2",
	},
	{
		id: 1,
		title: "The Top 5 VS Code Extensions for JavaScript Developers",
		date: "2023-04-20",
		tags: ["vscode", "javascript", "extensions"],
		link: "/post/1",
		description:
			"A list of the top 5 VS Code extensions for JavaScript developers with code snippets and explanations.",
	},
];
