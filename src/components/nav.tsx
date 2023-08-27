import { AiTwotoneExperiment } from "react-icons/ai";
import { Link, useLocation } from "wouter";
import { useTheme } from "../hooks/themeHook";
import ColorModeToggle from "./themeToggle";
const Nav = () => {
	const [location] = useLocation();
	const { theme } = useTheme();

	const isDark = theme === "dark";
	return (
		<div className="h-[3rem]">
			<nav
				className={`block fixed w-full z-[2] h-[3rem] backdrop-blur-[4px] 
      ${
				isDark
					? "text-white bg-[#20202380]"
					: "text-black bg-[rgba(255, 255, 255, 0.25)]"
			}

      `}
			>
				<div className="flex flex-row justify-around items-center align-middle h-full">
					<span className="font-semibold text-[1.35rem]">
						<Link href="/" className="flex items-center gap-x-[0.1rem]">
							<AiTwotoneExperiment />
							<span>Nikhil Kumar</span>
						</Link>
					</span>

					<ul className="list-none flex items-center gap-x-5">
						<li>
							<Link
								href="/projects"
								className={`link ${
									location === "/projects" ? "bg-[var(--teal)] text-black" : ""
								}`}
							>
								Works
							</Link>
						</li>
						<li>
							<Link
								href="/posts"
								className={`link ${
									location === "/posts" ? "bg-[var(--teal)] text-black" : ""
								}`}
							>
								Posts
							</Link>
						</li>
					</ul>
					<div>
						<ColorModeToggle />
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Nav;
