import "./main.css";
import { CSSTransition } from "react-transition-group";
import { useRef, useState, useEffect } from "react";
import {
	CloudLightningIcon,
	CogIcon,
	ChevronDownIcon,
	PlusIcon,
	ChevronLeft,
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
	const dropdownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="nav-icon" ref={dropdownRef}>
			<Icon onClick={handleClick} />

			<CSSTransition
				in={isOpen}
				className="dropdown"
				timeout={200}
				unmountOnExit
			>
				<div>{children}</div>
			</CSSTransition>
		</div>
	);
}

function DropdownMenu() {
	const [activeSubmenu, setActiveSubmenu] = useState("main");
	const [menuHeight, setMenuHeight] = useState(null);

	const calculateHeight = (el) => {
		setMenuHeight(el.offsetHeight);
	};

	function DropdownItem({ label, leftIcon, rightIcon, goToMenu }) {
		return (
			<div
				className="dropdown-item"
				onClick={() => setActiveSubmenu(goToMenu)}
				onKeyDown={() => setActiveSubmenu(goToMenu)}
			>
				<span>{leftIcon}</span>
				{label}
				<span className="right-icon">{rightIcon}</span>
			</div>
		);
	}

	return (
		<div style={{ height: menuHeight }}>
			<CSSTransition
				classNames="menu-primary"
				in={activeSubmenu === "main"}
				timeout={500}
				onEnter={calculateHeight}
				unmountOnExit
			>
				<div className="menu">
					<DropdownItem label="Settings" goToMenu={"settings"} />
				</div>
			</CSSTransition>
			<CSSTransition
				classNames="menu-secondary"
				in={activeSubmenu === "settings"}
				onEnter={calculateHeight}
				timeout={500}
				unmountOnExit
			>
				<div className="menu">
					<DropdownItem leftIcon={<ChevronLeft />} goToMenu={"main"} />
					<DropdownItem label={"Personal"} />
					<DropdownItem label={"Security"} />
				</div>
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
					<DropdownMenu />
				</DropdownNavIcon>
			</div>
		</nav>
	);
}
