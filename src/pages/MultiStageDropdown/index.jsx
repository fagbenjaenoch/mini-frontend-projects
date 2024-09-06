import { useState } from "react";
import "./main.css";
import {
	CloudLightningIcon,
	CogIcon,
	ChevronDownIcon,
	PlusIcon,
} from "lucide-react";

const navIcons = [
	{ icon: PlusIcon, key: "PlusIcon" },
	{ icon: CloudLightningIcon, key: "BoltIcon" },
	{ icon: CogIcon, key: "CogIcon" },
	{ icon: ChevronDownIcon, key: "ChevronDownIcon", hasDropdown: true },
];

function NavIcon({ children, Icon, hasDropdown }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="nav-icon" onClick={handleClick} onKeyDown={handleClick}>
			<Icon />

			{isOpen && children}
		</div>
	);
}

export default function MultiStageDropdown() {
	return (
		<nav className="navbar">
			<div>MultiStageDropdown</div>
			<div className="nav-icons">
				{navIcons.map((navIcon) =>
					navIcon.hasDropdown ? (
						<NavIcon
							key={navIcon.key}
							Icon={navIcon.icon}
							hasDropdown={navIcon.hasDropdown}
						>
							<div className="dropdown">
								<span>Hello World</span>
							</div>
						</NavIcon>
					) : (
						<NavIcon key={navIcon.key} Icon={navIcon.icon} />
					),
				)}
			</div>
		</nav>
	);
}
