import { useTheme } from "../hooks/themeHook";

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

const NeuButton = ({ text, onClick }: ButtonProps) => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<button
			onClick={onClick}
			className={`px-6 py-2 font-medium bg-[var(--dteal)] text-white w-fit transition-all ${
				isDark
					? "shadow-[3px_3px_0px_white]  shadow-[#00808066]"
					: "shadow-[3px_3px_0px_black]"
			} hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]`}
		>
			{text}
		</button>
	);
};

export default NeuButton;
