import { Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";

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
			title={`Toggle ${theme === "light" ? "dark" : "light"} theme`}
		>
			{theme === "light" ? <Moon /> : <Sun />}
		</div>
	);
}
