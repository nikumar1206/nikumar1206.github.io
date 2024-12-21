import { FaGithub } from "react-icons/fa";
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
					: "text-black bg-[rgba(255, 255, 255, 0.25)] bg-[#ffffff40]"
			}

      `}
			>
				<div className="flex flex-row justify-around items-center align-middle h-full">
					<div className="flex">
						<ul className="list-none flex items-center gap-x-1">
							<li>
								<Link
									href=""
									className={`link link-underline font-code text-sm ${
										location === "/" ? "link-underline-active" : ""
									}`}
								>
									/home
								</Link>
							</li>
							<li>
								<Link
									href="/posts"
									className={`link link-underline font-code text-sm ${
										location.includes("post") ? "link-underline-active" : ""
									}`}
								>
									/posts
								</Link>
							</li>
							<li>
								<Link
									href="/projects"
									className={`link link-underline font-code text-sm ${
										location === "/projects" ? "link-underline-active" : ""
									}`}
								>
									/projects
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
									<code className="text-sm">source_code</code>
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
