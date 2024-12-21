import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { useTheme } from "../hooks/themeHook";
const Footer = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<footer
			className={`${
				isDark ? "footer-dark" : "footer"
			} h-[3rem] fixed left-0 right-0 bottom-0 backdrop-blur-lg z-[2] flex flex-row justify-around items-center w-full`}
		>
			<div className="flex gap-x-1">
				<span>© 2024 by Nikhil Kumar </span>
				<span className="hidden sm:inline">- All rights reserved.</span>
			</div>
			<div className="flex gap-x-4">
				<a
					href="https://github.com/nikumar1206"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<FiGithub className="text-[1.4rem]" />
				</a>
				<a
					href="https://medium.com/@nikumar1206"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Medium"
				>
					<ImNewspaper className="text-[1.4rem]" />
				</a>
				<a
					href="https://www.linkedin.com/in/nikhilk99/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
				>
					<FaLinkedinIn className="text-[1.4rem]" />
				</a>
			</div>
		</footer>
	);
};
export default Footer;
