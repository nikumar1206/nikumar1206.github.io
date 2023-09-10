import { useEffect, useState } from "react";
import { useTheme } from "../hooks/themeHook";

const STRINGS = ["a software engineer", "based in NYC", "a fitness fanatic"];
const TYPINGDELAY = 70;
const PAUSEDURATION = 500;

const Typewriter = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";
	const [currentStringIndex, setCurrentStringIndex] = useState(0);
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		const currentString = STRINGS[currentStringIndex];
		let currentIndex = 0;

		const typingInterval = setInterval(() => {
			if (currentIndex <= currentString.length) {
				setDisplayText(currentString.slice(0, currentIndex));
				currentIndex++;
			} else {
				clearInterval(typingInterval);

				setTimeout(() => {
					currentIndex = currentString.length;
					const untypingInterval = setInterval(() => {
						if (currentIndex >= 0) {
							setDisplayText(currentString.slice(0, currentIndex));
							currentIndex--;
						} else {
							clearInterval(untypingInterval);
							if (currentStringIndex === STRINGS.length - 1) {
								setCurrentStringIndex(0);
							} else {
								setCurrentStringIndex(currentStringIndex + 1);
							}
						}
					}, TYPINGDELAY);
				}, PAUSEDURATION);
			}
		}, TYPINGDELAY);

		return () => {
			clearInterval(typingInterval);
		};
	}, [currentStringIndex]);

	return (
		<div className="flex flex-col justify-center items-center h-[2rem] bg-inherit mx-auto w-[100%] py-10 mt-6">
			<span className={`text-[2.6rem] font-semibold leading-[2.25rem]`}>
				Hi, I&apos;m <span className="text-[var(--dteal)]">Nikhil</span>
			</span>
			<div
				className={`md:text-[2rem] sm:text-[1rem] font-mono text-center flex flex-col mt-6 ${
					isDark ? "border-[#F0F0F0]" : "border-[black]"
				} border-r-[3px] pr-1.5 md:min-h-[48px] sm:min-h-[20px] min-h-[20px]`}
			>
				{displayText}
			</div>
		</div>
	);
};

export default Typewriter;
