import React from "react";
import BrandIcon from "../atoms/BrandIcon";
import ThemeIcon from "../atoms/ThemeIcon";

export default function DesktopNav() {
	return (
		<nav>
			<div className="flex flex-row justify-between">
				<BrandIcon />
				<ThemeIcon />
			</div>
		</nav>
	);
}
