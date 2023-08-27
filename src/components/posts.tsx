import Post from "./post";

export interface PostData {
	title: string;
	date: string;
	description: string;
	body?: string;
	link: string;
	tags: string[];
}

const allPosts: PostData[] = [
	{
		title: "The Top 5 VS Code Extensions for JavaScript Developers",
		date: "2023-04-20",
		tags: ["vscode", "javascript", "extensions"],
		link: "https://medium.com/@nikumar1206/the-top-5-vs-code-extensions-for-javascript-developers-aa8842329f37",
		description:
			"A list of the top 5 VS Code extensions for JavaScript developers with code snippets and explanations.",
	},
];

const Posts = () => {
	return (
		<section className="w-[60%] mx-auto mt-20">
			{allPosts.map((post, index) => {
				return <Post post={post} key={index} />;
			})}
		</section>
	);
};
export default Posts;
