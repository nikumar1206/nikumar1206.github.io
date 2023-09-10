import { useTheme } from "../hooks/themeHook";
import Bio from "./bio";
import Typewriter from "./typewriter";

const Splash = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<section
			id="splash-container"
			className={`flex flex-col content-center items-center mx-auto space-y-5 mt-4 max-h-[calc(100vh-9rem)] ${
				isDark ? "text-[#F0F0F0]" : "text-black"
			}`}
		>
			<img
				className="w-[28%] p-0 m-0"
				src={isDark ? "/undraw_designer_night.svg" : "/undraw_designer.svg"}
				alt=""
			/>
			<div className="w-[75vw] md:w-[50vw]">
				<Typewriter />
				<Bio />
			</div>
		</section>
	);
};
export default Splash;
