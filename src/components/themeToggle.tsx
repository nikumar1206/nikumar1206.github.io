import { useTheme } from "../hooks/themeHook";

const ColorModeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	const playSound = async () => {
		new window.AudioContext(); // necessary fix audio delay on Safari

		const audio = new Audio(
			`${theme === "dark" ? "/darkMode.wav" : "/lightMode.wav"}`
		);
		audio.volume = 0.2;
		await audio.play();
	};

	const handleToggle = async () => {
		setTheme(isDark ? "light" : "dark");
		await playSound();
	};

	return (
		<button
			onClick={() => void handleToggle()}
			type="button"
			aria-label={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
			title={isDark ? "Activate Light Mode" : "Activate Dark Mode"}
			className="toggle-btn"
		>
			{isDark ? (
				<div className="div-toggle-btn-dark"></div>
			) : (
				<div className="div-toggle-btn-light"></div>
			)}
		</button>
	);
};
export default ColorModeToggle;
