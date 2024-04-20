import React, { useEffect, useState, createContext } from "react";

const initialState = {
	theme: "light",
	setTheme: (theme) => {},
};

export const ThemeProviderContext = createContext(initialState);

export default function ThemeProvider({
	children,
	defaultTheme = "light",
	storageKey = "fe-theme",
	...props
}) {
	const [theme, setTheme] = useState(
		() => localStorage.getItem(storageKey) || defaultTheme,
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove("light", "dark");

		if (theme === "system") {
			const systemTheme = window.matchMedia("(prefer-color-scheme: dark)")
				.matches
				? "dark"
				: "light";

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const themeProviderValue = {
		theme,
		setTheme: (userTheme) => {
			localStorage.setItem(storageKey, userTheme);
			setTheme(userTheme);
		},
	};

	return (
		<ThemeProviderContext.Provider {...props} value={themeProviderValue}>
			{children}
		</ThemeProviderContext.Provider>
	);
}
