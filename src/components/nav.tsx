import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "wouter";
import { useTheme } from "../hooks/themeHook";
import Gopher from "./gopher";
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
					: "text-black bg-[rgba(255, 255, 255, 0.25)] bg-[#ffffff40]"
			}

      `}
			>
				<div className="flex flex-row justify-around items-center align-middle h-full">
					<div className="flex gap-x-20">
						<span className="font-semibold text-[1.35rem]">
							<Link href="/" className="flex items-center gap-x-[0.1rem]">
								<Gopher />
								<span>Nikhil Kumar</span>
							</Link>
						</span>

						<ul className="list-none flex items-center gap-x-1">
							<li>
								<Link
									href="/projects"
									className={`link ${
										location === "/projects"
											? "bg-[var(--teal)] text-black"
											: ""
									}`}
								>
									Works
								</Link>
							</li>
							<li>
								<Link
									href="/posts"
									className={`link ${
										location.includes("post")
											? "bg-[var(--teal)] text-black"
											: ""
									}`}
								>
									Posts
								</Link>
							</li>
							<li>
								<a
									href="https://github.com/nikumar1206/nikumar1206.github.io"
									target="_blank"
									rel="noopener noreferrer"
									className={`link flex items-center gap-x-1`}
								>
									<FaGithub />
									<span>Github</span>
								</a>
							</li>
						</ul>
					</div>
					<div>
						<ColorModeToggle />
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Nav;
