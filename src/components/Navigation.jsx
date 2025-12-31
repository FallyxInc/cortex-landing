import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const Navigation = () => {
	const { colors } = useTheme();
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ path: "/", label: "Home" },
		{ path: "/product", label: "Product" },
		{ path: "/use-cases", label: "Use Cases" },
		{ path: "/team", label: "Team" },
		{ path: "/contact", label: "Contact" },
	];

	const isActive = (path) => {
		return location.pathname === path;
	};

	return (
		<nav
			className={`fixed top-5 left-1/2 z-999 -translate-x-1/2 rounded-xl border backdrop-blur-sm transition-all duration-700 ease-in-out px-4 py-2 md:px-8`}
			style={{ 
				borderColor: colors.borderLight, 
				backgroundColor: hexToRgba(colors.surface, 0.8) 
			}}
		>
			<div
				className={`flex items-center justify-center transition-all duration-500 ease-out ${
					isScrolled ? "gap-2 sm:gap-3 md:gap-4" : "gap-3 sm:gap-4 md:gap-6"
				} `}
			>
				{navItems.map((item) => (
					<Link
						key={item.path}
						to={item.path}
						className={`link-hover font-medium tracking-wide uppercase transition-all duration-500 ease-in-out hover:scale-110 ${
							isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
						} ${isActive(item.path) ? "font-bold" : ""}`}
						style={{ 
							transitionProperty: "font-size, color, transform",
							color: isActive(item.path) ? colors.primary : colors.textSecondary
						}}
					>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
