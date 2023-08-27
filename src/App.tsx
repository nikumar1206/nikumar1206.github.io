import { useContext, useEffect, useState } from "react";
import { Route } from "wouter";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Posts from "./components/posts";
import Projects from "./components/projects";
import Splash from "./components/splash";
import { ThemeContext } from "./context/themeContext";
function App() {
	const [theme, setTheme] = useState(useContext(ThemeContext).theme);

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

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				className={`${
					theme === "dark"
						? "bg-[#202023] text-[#f0f0f0]"
						: "bg-[#f1e7db] text-[#202023]"
				} h-screen w-screen`}
			>
				<Nav />

				<Route path="/" component={Splash} />
				<Route path="/projects" component={Projects} />
				<Route path="/posts" component={Posts} />
				<Footer />
			</div>
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
 */
