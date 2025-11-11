import { useState, useEffect } from "react";

const Navigation = ({ smoothScroll }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-5 left-1/2 z-999 -translate-x-1/2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-700 ease-in-out ${
				isScrolled
					? "px-8 py-2 "
					: "px-8 py-2 "
			} `}
		>
			<div
				className={`flex items-center justify-center transition-all duration-500 ease-out ${
					isScrolled ? "gap-3 sm:gap-4 md:gap-6" : "gap-6 sm:gap-8 md:gap-12"
				} `}
			>
				<a
					href="#hero"
					onClick={(e) => smoothScroll(e, "#hero")}
					className={`link-hover font-medium tracking-wide text-white/80 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:text-[#00d4ff] ${isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"} `}
					style={{ transitionProperty: "font-size, color, transform" }}
				>
					Home
				</a>
				<a
					href="#testimonials"
					onClick={(e) => smoothScroll(e, "#testimonials")}
					className={`link-hover font-medium tracking-wide text-white/80 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:text-[#00d4ff] ${isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"} `}
					style={{ transitionProperty: "font-size, color, transform" }}
				>
					Testimonials
				</a>
				<a
					href="#products"
					onClick={(e) => smoothScroll(e, "#products")}
					className={`link-hover font-medium tracking-wide text-white/80 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:text-[#00d4ff] ${isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"} `}
					style={{ transitionProperty: "font-size, color, transform" }}
				>
					Products
				</a>
				<a
					href="#contact"
					onClick={(e) => smoothScroll(e, "#contact")}
					className={`link-hover font-medium tracking-wide text-white/80 uppercase transition-all duration-500 ease-in-out hover:scale-110 hover:text-[#00d4ff] ${isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"} `}
					style={{ transitionProperty: "font-size, color, transform" }}
				>
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navigation;
