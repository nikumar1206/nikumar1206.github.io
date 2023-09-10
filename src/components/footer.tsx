import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { useTheme } from "../hooks/themeHook";
const Footer = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<footer
			className={`footer w-[75%] mx-auto ${
				isDark ? "footer-dark" : "footer"
			} flex flex-row h-[3rem]`}
		>
			<div className="flex  justify-between">
				© 2023 by Nikhil Kumar. All rights reserved.
			</div>
			<div className="flex gap-x-4">
				<div>
					<a
						href="https://twitter.com/nick_kumar_"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Twitter"
					>
						<FiTwitter className="text-[1.4rem]" />
					</a>
				</div>
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
