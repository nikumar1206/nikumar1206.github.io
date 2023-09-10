import ReactMarkdown from "react-markdown";
import { useTheme } from "../hooks/themeHook";
import { PostData } from "../shared/posts";
import { CodeBlock } from "./codeBlock";

interface PostParams {
	readonly id?: string;
	content: string;
	post: PostData | null;
}

const Post = ({ content, post }: PostParams) => {
	const { theme } = useTheme();

	const isDark = theme === "dark";

	return (
		<div
			className={`max-w-[68rem] mx-auto p-6 ${
				isDark ? "" : "bg-white"
			} rounded-lg shadow-md mt-10 font-posts`}
		>
			<span className="float-right">{post?.date}</span>
			<ReactMarkdown
				className={`max-w-none prose-pre:p-0 prose-h2:mt-[1em] prose-h1:text-5xl ${
					isDark ? "prose prose-invert prose-fuchsia" : "prose prose-fuschia"
				}}`}
				components={{
					img({ ...props }) {
						console.log(props);
						return (
							<img
								{...props}
								className="m-0 inline-block ml-1"
								width={15}
								height={15}
							/>
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
								className={className}
							>
								{children}
							</code>
						);
					},
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default Post;
