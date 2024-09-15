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
	const ref = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	// useEffect(() => {
	// 	document.addEventListener("click", (e) => {
	// 		e.target.className !== ref.current.className ||  && setIsOpen(false);
	// 		console.log(e.target.className);
	// 	});

	// 	return () => {
	// 		document.removeEventListener("click", (e) => {
	// 			e.target.className !== ref.current.className && setIsOpen(false);
	// 		});
	// 	};
	// });

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="nav-icon" ref={ref}>
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
	const [menuHeight, setMenuHeight] = useState(0);

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
				className="dropdown-menu"
				in={activeSubmenu === "main"}
				timeout={200}
				onEnter={calculateHeight}
				unmountOnExit
			>
				<div>
					<DropdownItem label="Settings" goToMenu={"settings"} />
				</div>
			</CSSTransition>
			<CSSTransition
				className="dropdown-menu-secondary"
				in={activeSubmenu === "settings"}
				onEnter={calculateHeight}
				timeout={200}
				unmountOnExit
			>
				<div>
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
