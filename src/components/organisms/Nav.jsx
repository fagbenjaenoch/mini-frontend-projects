import Container from "../atoms/Container";
import DesktopNav from "../molecules/DesktopNav";

export default function Nav() {
	return (
		<div className="mb-4">
			<div className="block px-4 py-6">
				<DesktopNav />
			</div>
		</div>
	);
}
