import { CSSTransition } from "react-transition-group";
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
];

function NavIcon({ Icon }) {
	return (
		<div className="nav-icon">
			<Icon />
		</div>
	);
}

function DropdownNavIcon({ Icon, children }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="nav-icon" onClick={handleClick} onKeyDown={handleClick}>
			<Icon />

			<CSSTransition
				in={isOpen}
				className="dropdown"
				timeout={200}
				unmountOnExit
			>
				{children}
			</CSSTransition>
		</div>
	);
}

export default function MultiStageDropdown() {
	return (
		<nav className="navbar">
			<div>MultiStageDropdown</div>
			<div className="nav-icons">
				{navIcons.map((navIcon) => (
					<NavIcon key={navIcon.key} Icon={navIcon.icon} />
				))}
				<DropdownNavIcon Icon={ChevronDownIcon}>
					<div className="dropdown-menu">Hello World</div>
				</DropdownNavIcon>
			</div>
		</nav>
	);
}
