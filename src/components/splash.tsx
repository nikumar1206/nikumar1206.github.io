import { Variants, motion } from "framer-motion";
import { useTheme } from "../hooks/themeHook";
import Bio from "./bio";
import Typewriter from "./typewriter";

const routeVariants = {
	initial: {
		y: "2vh",
		opacity: 0,
	},
	final: {
		y: "0vh",
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.4,
		},
	},
} as Variants;

const Splash = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<motion.section
			variants={routeVariants}
			initial="initial"
			animate="final"
			id="splash-container"
			className={`flex flex-col content-center items-center mx-auto space-y-5 mt-4 ${
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
		</motion.section>
	);
};
export default Splash;
