import { ArrowDown } from "lucide-react";
import "./App.css";
import Container from "./components/atoms/Container";
import Nav from "./components/organisms/Nav";
import { ArrowDownIcon } from "lucide-react";

function App() {
	return (
		<div className="font-clashDisplay h-screen relative">
			<Nav />
			<Container>
				<section className="mt-14">
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
				className="absolute bottom-0 left-4 animate-bounce"
				size={30}
			/>
		</div>
	);
}

export default App;
