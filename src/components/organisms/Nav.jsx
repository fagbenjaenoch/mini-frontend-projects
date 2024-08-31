import Container from "../atoms/Container";
import DesktopNav from "../molecules/DesktopNav";

export default function Nav() {
	return (
		<div className="mb-4">
			<Container>
				<div className="hidden sm:block py-6">
					<DesktopNav />
				</div>
			</Container>
			<div className="block sm:hidden">
				<DesktopNav />
			</div>
		</div>
	);
}
