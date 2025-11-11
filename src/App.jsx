import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Products from "./components/Products";
import Founders from "./components/Founders";
import Footer from "./components/Footer";
import Problem from "./components/Problem";
import Contact from "./components/Contact";

function App() {
	const [currentSection, setCurrentSection] = useState(0);

	useEffect(() => {
		const starsContainer = document.getElementById("stars");
		if (starsContainer) {
			for (let i = 0; i < 200; i++) {
				const star = document.createElement("div");
				star.className = "star";
				star.style.left = Math.random() * 100 + "%";
				star.style.top = Math.random() * 100 + "%";
				star.style.animationDelay = Math.random() * 3 + "s";
				starsContainer.appendChild(star);
			}
		}

		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px",
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.opacity = "1";
					entry.target.style.transform = "translateY(0)";
				}
			});
		}, observerOptions);

		document.querySelectorAll(".animate-on-scroll").forEach((el) => {
			el.style.opacity = "0";
			el.style.transform = "translateY(20px)";
			el.style.transition = "all 1.2s ease";
			observer.observe(el);
		});

		const sections = document.querySelectorAll(".scroll-section");
		const sectionObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Array.from(sections).indexOf(entry.target);
						setCurrentSection(index);
					}
				});
			},
			{ threshold: 0.5 },
		);

		sections.forEach((section) => sectionObserver.observe(section));

		return () => {
			observer.disconnect();
			sectionObserver.disconnect();
		};
	}, []);

	const smoothScroll = (e, target) => {
		e.preventDefault();
		const element = document.querySelector(target);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const scrollToNext = () => {
		const sections = document.querySelectorAll(".scroll-section");
		const nextIndex = Math.min(currentSection + 1, sections.length - 1);
		sections[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className="scroll-smooth">
			<Navigation smoothScroll={smoothScroll} />

			<div className="scroll-section relative" id="hero">
				<Hero />
				<div className="absolute bottom-8 left-1/2 z-100 -translate-x-1/2 animate-bounce">
					<button
						onClick={scrollToNext}
						className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/30"
						aria-label="Scroll to next section"
					>
						<span className="text-2xl text-white">↓</span>
					</button>
				</div>
			</div>

			<div className="scroll-section" id="testimonials">
				<Testimonials />
			</div>

			<div className="scroll-section" id="problem">
				<Problem />
			</div>

			<div className="scroll-section" id="products">
				<Products />
			</div>

			<div id="founders">
				<Founders />
			</div>

			<div className="scroll-section" id="contact">
				<Contact />
			</div>
			<Footer />

			<div className="fixed top-1/2 right-6 z-998 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
				{["Hero", "Testimonials", "Products"].map((label, index) => (
					<button
						key={label}
						onClick={() => {
							const sections = document.querySelectorAll(".scroll-section");
							sections[index]?.scrollIntoView({
								behavior: "smooth",
								block: "start",
							});
						}}
						className={`group relative h-3 w-3 rounded-full transition-all hover-scale ${
							currentSection === index
								? "scale-125 bg-[#00d4ff] shadow-lg shadow-[#00d4ff]/50"
								: "bg-white/30 hover:bg-white/50 hover:scale-110"
						}`}
						aria-label={`Go to ${label}`}
					>
						<span className="pointer-events-none absolute top-1/2 right-6 -translate-y-1/2 rounded bg-black/80 px-3 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
							{label}
						</span>
					</button>
				))}
			</div>
		</div>
	);
}

export default App;
