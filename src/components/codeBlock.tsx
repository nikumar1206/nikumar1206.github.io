import { useTheme } from "@/hooks/themeHook";
import { memo, useState } from "react";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import yaml from "react-syntax-highlighter/dist/esm/languages/hljs/yaml";
import {
	a11yDark as darkTheme,
	xcode as lightTheme,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
	language: string;
	readonly value: string;
}

SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("yaml", yaml);

const CodeBlock = memo(({ language, value }: CodeBlockProps) => {
	const [copySuccess, setCopySuccess] = useState(false);
	const { theme } = useTheme();
	const isDark = theme === "dark";

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(value);
		setCopySuccess(true);
		setTimeout(() => {
			setCopySuccess(false);
		}, 2000);
	};

	return (
		<div className="font-sans shadow-lg w-full rounded-3xl">
			<div className="w-full rounded-md">
				<div className="flex justify-between bg-slate-100 dark:bg-gray-500 dark:text-neutral-100 w-full px-3 py-1 font-code items-center">
					<div className="flex items-center gap-x-3">
						<img
							src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${language}-original.svg`}
							width={20}
							className="my-0 p-0"
							onError={(e) => {
								(e.target as HTMLImageElement).src = "/file.svg";
							}}
						/>
						<span className="lowercase text-black dark:text-white flex align-middle font-light text-sm">
							{language}
						</span>
					</div>
					<button
						onClick={() => void copyToClipboard()}
						className="w-[0.85rem] h-[0.85rem] hover:text-[#ff3399] text-gray-500 dark:text-neutral-100 transition-all duration-200"
					>
						{copySuccess ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-[0.85rem] h-[0.85rem] text-[#ff3399]"
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
								className="w-[0.85rem] h-[0.85rem] flex align-middle"
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
			</div>
			<SyntaxHighlighter
				language={language}
				style={isDark ? darkTheme : lightTheme}
				wrapLongLines
				wrapLines
				children={value}
				CodeTag={"code"}
				lineProps={{
					style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
				}}
				codeTagProps={{
					style: {
						fontFamily: "Jetbrains Mono",
					},
				}}
				customStyle={{
					margin: 0,
					width: "100%",
					padding: "1rem",
					fontFamily: "Jetbrains Mono",
					borderRadius: "0 0",
				}}
			/>
		</div>
	);
});

export { CodeBlock };
