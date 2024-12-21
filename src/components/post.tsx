import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "../hooks/themeHook";
import { PostData } from "../shared/posts";
import { CodeBlock } from "./codeBlock";

interface PostParams {
	readonly id?: string;
	post: PostData | null;
}

const Post = ({ post }: PostParams) => {
	const { theme } = useTheme();

	const isDark = theme === "dark";
	const [markdownContent, setMarkdownContent] = useState<string>(
		post?.body ?? ""
	);

	useEffect(() => {
		const fetchMarkdownFile = (id: number) => {
			let markdownContent = "";
			console.log("fetching markdown file");
			fetch(`/post${id}.md`)
				.then(async (res) => {
					markdownContent = await res.text();
					setMarkdownContent(markdownContent);
				})
				.catch((err) => {
					console.log(err);
					markdownContent = "An error occurred while fetching the post.";
				});

			return markdownContent;
		};
		if (post && !post.body) {
			const markdownContent = fetchMarkdownFile(post.id);
			setMarkdownContent(markdownContent);
			console.log(markdownContent);
		}
	}, [post]);

	if (!post) {
		return (
			<div className="max-w-[64rem] mx-auto p-6 mt-10 font-posts">
				<h1 className="text-4xl font-bold">404</h1>
				<p className="text-xl mt-4">Post not found.</p>
			</div>
		);
	}

	return (
		<div
			className={`max-w-[64rem] mx-auto p-6 ${
				isDark ? "" : ""
			} mt-10 font-posts`}
		>
			<ReactMarkdown
				className="max-w-none prose-pre:p-0 prose-h2:mt-[1em] prose-h1:text-5xl prose prose-fuschia dark:prose-invert"
				components={{
					img({ ...props }) {
						return (
							<div className="flex mx-auto flex-col">
								<img
									{...props}
									className="m-0 mx-auto w-[45%] h-[25%] rounded-md"
								/>
								<span className="text-center">
									{/* eslint-disable-next-line */}
									{props.alt!}
								</span>
							</div>
						);
					},
					a({ ...props }) {
						return (
							<span className="inline-flex">
								<a
									{...props}
									className=" hover:underline transition-all duration-200"
									target="_blank"
									rel="noopener noreferrer"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="align-middle ml-[.15rem]"
								>
									<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
									<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
								</svg>
							</span>
						);
					},
					code({ inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className ?? "");
						return !inline && match ? (
							<CodeBlock
								language={match[1] ? match[1] : ""}
								value={String(children).replace(/\n$/, "")}
								{...props}
							/>
						) : (
							<code
								{...props}
								style={{ color: isDark ? "#ff63c3" : "#e60073" }}
								className={className + "font-code text-sm"}
							>
								{children}
							</code>
						);
					},
					h1({ ...props }) {
						return (
							<>
								<h1 {...props} className="text-4xl font-thin mb-2" />
								<span>{post.date}</span>
							</>
						);
					},
				}}
			>
				{markdownContent}
			</ReactMarkdown>
		</div>
	);
};

export default Post;
