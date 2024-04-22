import "./App.css";

import { ArrowDownIcon } from "lucide-react";

import Container from "./components/atoms/Container";
import Nav from "./components/organisms/Nav";
import ThemeProvider from "./providers/Theme";

function App() {
	return (
		<ThemeProvider>
			<div className="font-clashDisplay h-screen relative bg-gradient-to-b from-slate-300 to-gray-100 dark:from-slate-950 dark:to-slate-800">
				<Nav />
				<Container>
					<section className="mt-14 text-gray-950 dark:text-gray-200">
						<div>
							<h1 className="text-7xl font-bold tracking-tight">
								Design Systems,
								<br /> A Book By Alexander Schvets
							</h1>
							<div className="mt-4 flex gap-6">
								<p>Enoch Fagbenja</p>
								<p>20 April, 2024</p>
							</div>
						</div>
					</section>
				</Container>
				<ArrowDownIcon
					className="absolute bottom-2 left-4 animate-bounce dark:text-gray-200"
					size={30}
				/>
			</div>
		</ThemeProvider>
	);
}

export default App;
