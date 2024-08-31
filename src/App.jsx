import "./App.css";

import { ArrowDownIcon } from "lucide-react";

import Container from "./components/atoms/Container";
import Nav from "./components/organisms/Nav";
import ThemeProvider from "./providers/Theme";

function App() {
	return (
		<ThemeProvider>
			<div className="h-screen flex flex-col items-center justify-center gap-1">
				<header className="flex flex-col items-center mb-5">
					<h1 className="text-2xl font-bold">Mini Frontend Projects</h1>
					<p>Collection of frontend ideas that comes across my mind</p>
				</header>
				<a href="" className="underline">Example Blog Page</a>
				<a href="" className="underline">Dropdown Component</a>
			</div>
		</ThemeProvider>
	);
}

export default App;
