import { AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Route, Router, Switch } from "wouter";
import {
	BaseLocationHook,
	navigate,
	useLocationProperty,
} from "wouter/use-location";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Post from "./components/post";
import Posts from "./components/posts";
import Projects from "./components/projects";
import Splash from "./components/splash";
import { ThemeContext } from "./context/themeContext";
import { allPosts } from "./shared/posts";
function App() {
	const [theme, setTheme] = useState(useContext(ThemeContext).theme);
	const [markdownContent, setMarkdownContent] = useState("");

	const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

	const hashNavigate = (to: string) => {
		navigate("#" + to);
	};

	const useHashLocation = () => {
		const location = useLocationProperty(hashLocation);
		return [location, hashNavigate];
	};

	useEffect(() => {
		window.localStorage.setItem("theme", theme);
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			document.documentElement.classList.remove("light");
		} else {
			document.documentElement.classList.add("light");
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const fetchMarkdownFile = async (id: string) => {
		// ! this is being fetched twice! likely due to storing the fetch result in state causing a re-render and then invoking the same call again.
		try {
			const res = await fetch(`/post${id}.md`);
			setMarkdownContent(await res.text());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Router hook={useHashLocation as BaseLocationHook}>
				<div
					className={`${
						theme === "dark"
							? "bg-[#202023] text-[#f0f0f0]"
							: "bg-[#f1e7db] text-[#202023]"
					} h-screen w-screen`}
				>
					<Nav />
					<AnimatePresence
						mode="wait"
						initial={true}
						onExitComplete={() => {
							if (typeof window !== "undefined") {
								window.scrollTo({ top: 0 });
							}
						}}
					>
						<Switch>
							<Route path="/" component={Splash} />
							<Route path="/projects" component={Projects} />
							<Route path="/posts" component={Posts} />
							<Route path="/post/:id">
								{(params) => {
									fetchMarkdownFile(params.id).catch((err) => {
										console.log(err);
									});
									return (
										<Post
											id={params.id}
											content={markdownContent}
											post={
												allPosts.find(
													(post) => String(post.id) === params.id
												) ?? null
											}
										/>
									);
								}}
							</Route>
						</Switch>
					</AnimatePresence>
					<Footer />
				</div>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;

/**
 * potential features:
 * 1. need to make footer icons clickable
 * 2. projects/resume button on the bottom or maybe the nav bar not sure
 * 3. footer icons for social media may be hard to reach? maybe move them to the top idk
 * 4. make an interests section?? maybe a
 * 5. format posts list by last added date
 * 6. better routing to posts page.
 *
 */
