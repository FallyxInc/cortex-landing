import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import UseCasesPage from "./pages/UseCasesPage";
import WhyWeBuiltThisPage from "./pages/WhyWeBuiltThisPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

function App() {
	useEffect(() => {
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

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="scroll-smooth">
			<Navigation />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/product" element={<ProductPage />} />
				<Route path="/use-cases" element={<UseCasesPage />} />
				<Route path="/why-we-built-this" element={<WhyWeBuiltThisPage />} />
				<Route path="/team" element={<TeamPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
