import { memo, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeBlockProps {
	language: string;
	readonly value: string;
}

const CodeBlock = memo(({ language, value }: CodeBlockProps) => {
	const [copySuccess, setCopySuccess] = useState(false);
	// const { theme } = useTheme();
	// const isDark = theme === "dark";

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(value);
		setCopySuccess(true);
		setTimeout(() => {
			setCopySuccess(false);
		}, 2000);
	};

	return (
		<div className="codeblock relative w-full font-sans shadow-lg">
			<div className="flex w-full items-center justify-between px-6 py-1 pr-4 text-zinc-50 bg-zinc-900">
				<div className="flex flex-row gap-x-3">
					<img
						src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`}
						width={25}
						className="my-0 p-0"
					/>
					{/* <span className="text-lg font-light lowercase">{language}</span> */}
				</div>
				<button
					onClick={() => void copyToClipboard()}
					className="w-5 h-5 hover:text-[#ff3399] text-gray-500 transition-all duration-200"
				>
					{copySuccess ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5 text-[#ff3399]"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 12.75l6 6 9-13.5"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
							/>
						</svg>
					)}
				</button>
			</div>
			<SyntaxHighlighter
				language={language}
				style={coldarkDark}
				PreTag="div"
				wrapLongLines
				wrapLines
				customStyle={{
					margin: 0,
					width: "100%",
					background: "transparent",
					padding: "1rem",
				}}
				codeTagProps={{
					className: "font-mono",
					style: {
						fontSize: "0.9rem",
					},
				}}
				lineProps={{
					style: {
						fontSize: "0.9rem",
						lineHeight: "1.25rem",
					},
				}}
			>
				{value}
			</SyntaxHighlighter>
		</div>
	);
});
CodeBlock.displayName = "CodeBlock";

export { CodeBlock };
