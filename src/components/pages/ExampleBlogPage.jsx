import { ArrowDownIcon } from "lucide-react";

import ThemeProvider from "../../providers/Theme";
import Nav from "../organisms/Nav";
import Container from "../atoms/Container";

function ExampleBlogPage() {
	return (
		<ThemeProvider>
			<div className="font-clashDisplay h-dvh relative bg-gradient-to-b from-slate-300 to-gray-100 dark:from-slate-950 dark:to-slate-800">
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

export default ExampleBlogPage;
