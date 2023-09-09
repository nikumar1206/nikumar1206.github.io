import ReactMarkdown from "react-markdown";
import { useTheme } from "../hooks/themeHook";
import { CodeBlock } from "./codeBlock";
import { PostData } from "./posts";

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
