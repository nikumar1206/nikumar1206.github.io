import { createContext } from "react";

type ThemeOptions = "light" | "dark";
type DispatchGeneric<T> = React.Dispatch<React.SetStateAction<T>>;

function getOSThemePreference() {
	const prefersDarkMode = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	return prefersDarkMode ? "dark" : "light";
}

function checkCookie() {
	const theme = window.localStorage.getItem("theme") as ThemeOptions | null;
	if (theme) return theme;

	const preference = getOSThemePreference() as ThemeOptions;
	window.localStorage.setItem("theme", preference);
	return preference;
}

function setTheme(theme: ThemeOptions) {
	window.localStorage.setItem("theme", theme);
}

export const ThemeContext = createContext({
	theme: checkCookie(),
	setTheme: setTheme as DispatchGeneric<ThemeOptions>,
});
