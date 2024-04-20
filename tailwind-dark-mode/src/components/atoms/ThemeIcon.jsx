import { Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { Moon } from "lucide-react";

export default function ThemeIcon() {
	const { theme, setTheme } = useTheme();

	const handleThemeToggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div
			onClick={handleThemeToggle}
			onKeyUp={handleThemeToggle}
			className="cursor-pointer dark:text-gray-200"
		>
			{theme === "light" ? <Moon /> : <Sun />}
		</div>
	);
}
