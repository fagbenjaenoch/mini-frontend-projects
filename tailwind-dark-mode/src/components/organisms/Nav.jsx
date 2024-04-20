import Container from "../atoms/Container";
import DesktopNav from "../molecules/DesktopNav";

export default function Nav() {
	return (
		<div className="mb-4">
			<div className="hidden sm:block py-6">
				<Container>
					<DesktopNav />
				</Container>
			</div>
			<div className="block sm:hidden">
				<DesktopNav />
			</div>
		</div>
	);
}
