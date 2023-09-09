import { PostData } from "../components/posts";

export const allPosts: PostData[] = [
	{
		id: 1,
		title: "The Top 5 VS Code Extensions for JavaScript Developers",
		date: "2023-04-20",
		tags: ["vscode", "javascript", "extensions"],
		link: "https://medium.com/@nikumar1206/the-top-5-vs-code-extensions-for-javascript-developers-aa8842329f37",
		description:
			"A list of the top 5 VS Code extensions for JavaScript developers with code snippets and explanations.",
	},
	{
		id: 2,
		title: "What's new in Python 3.12",
		date: "2023-08-06",
		tags: ["python", "3.12", "typing", "vscode"],
		description:
			"A brief overview of the important features coming to Python 3.12. Subject to change",
		link: `/post/2`,
	},
];
