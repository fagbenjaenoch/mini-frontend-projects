import { useState } from "react";
import "./index.css";
import { ChevronDownIcon } from "lucide-react";

export default function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className="content">
			<div className="dropdown">
				<button type="button" className="dropdown-btn" onClick={handleClick}>
					<p>Dropdown</p>
					<ChevronDownIcon className={isOpen ? "open" : ""} />
				</button>
				<ul className={`${isOpen && "open"} drawer`}>
					<li className="drawer-item">One</li>
					<li className="drawer-item">Two</li>
					<li className="drawer-item">Three</li>
				</ul>
			</div>
		</div>
	);
}
