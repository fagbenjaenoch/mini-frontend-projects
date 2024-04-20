import { useContext } from "react";
import { ThemeProviderContext } from "../providers/Theme";

export default function useTheme() {
	const context = useContext(ThemeProviderContext);

	if (context === undefined)
		throw new Error("useTheme must be within the ThemeProvider");

	return context;
}
