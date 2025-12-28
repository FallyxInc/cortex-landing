import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const { colors } = useTheme();

	const modules = [
		{
			title: "Falls Analysis",
			description: "Identify patterns, risk factors, and root causes of falls to prevent future incidents.",
		},
		{
			title: "Behaviour Analysis",
			description: "Understand behavioral patterns and triggers to improve care plans and resident outcomes.",
		},
		{
			title: "Hydration Analysis",
			description: "Track and analyze hydration data to prevent dehydration-related health issues.",
		},
		{
			title: "Incident Trend & Risk Analysis",
			description: "Cross-incident pattern detection that reveals insights no single data point could show.",
		},
	];

	const benefits = [
		{
			title: "Saved Time",
			description: "No manual reporting. Automated analysis frees staff to focus on care.",
		},
		{
			title: "Accurate Documentation",
			description: "More accurate documentation for compliance and regulatory requirements.",
		},
		{
			title: "Preventive Metrics",
			description: "Effective preventative metrics by merging all data together for actionable insights.",
		},
	];

	return (
		<div className="min-h-screen">
			{/* Above the fold */}
			<section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
				<div className="relative z-10 mx-auto w-full max-w-5xl text-center">
					<h1
						className="animate-on-scroll mb-6 text-5xl font-extrabold leading-tight tracking-tight md:mb-8 md:text-6xl lg:text-7xl"
						style={{ color: colors.text }}
					>
						Ascenix is an AI-powered incident analysis platform for senior care operators.
					</h1>
					<p
						className="animate-on-scroll mb-8 text-xl leading-relaxed md:mb-12 md:text-2xl lg:text-3xl"
						style={{ animationDelay: "0.2s", color: colors.textSecondary }}
					>
						We turn raw incident data into clear, actionable insight that reduces risk, injuries, and operational blind spots.
					</p>
					<div className="animate-on-scroll" style={{ animationDelay: "0.4s" }}>
						<Link
							to="/contact"
							className="inline-block rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg"
							style={{
								backgroundColor: colors.primary,
								color: colors.text,
								boxShadow: `0 0 20px ${colors.shadow}`,
							}}
						>
							Request a Demo
						</Link>
					</div>
				</div>
			</section>

			{/* The Problem */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						The Problem
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Incidents are frequent
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Senior care facilities face constant incidents that require immediate attention and documentation.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Data is fragmented
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Critical information lives in PCC, reports, and staff notes—disconnected and hard to analyze.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Reactive, not preventive
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Most homes respond to incidents after they happen rather than preventing them proactively.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Who this hurts
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Operators, clinical leaders, staff, and most importantly—residents and their families.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What Ascenix Does */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						What Ascenix Does
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">📥</div>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Ingests Data
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Seamlessly integrates with PointClickCare and other incident and operational data sources.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">🧠</div>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Analyzes Patterns
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								AI-driven analysis identifies causes, patterns, and risk factors.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">📊</div>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Produces Insights
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Clear summaries and actionable insights, not raw data dumps.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core Product Modules */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-4 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Core Product Modules
					</h2>
					<p
						className="animate-on-scroll mb-12 text-center text-lg"
						style={{ color: colors.textSecondary }}
					>
						All-in-one analysis platform for falls, behaviors, hydration, and more
					</p>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{modules.map((module, index) => (
							<div
								key={index}
								className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
								style={{
									backgroundColor: hexToRgba(colors.primaryLight, 0.05),
									borderColor: colors.borderLight,
								}}
							>
								<h3 className="mb-3 text-2xl font-bold" style={{ color: colors.text }}>
									{module.title}
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									{module.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* How It's Different */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundColor: hexToRgba(colors.accent, 0.05) }}>
				<div className="mx-auto max-w-4xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						How It's Different
					</h2>
					<div className="space-y-6">
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								AI-Driven Analysis
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Not just reporting. Our platform uses AI to understand why incidents happen, not just that they happened.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Cross-Incident Pattern Detection
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								By merging all data together, we create effective preventative metrics that analyzing one data point couldn't reveal.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Operator-Focused Outputs
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Clear, actionable insights designed for decision-makers, not raw data that requires interpretation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Key Benefits */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Why It Matters
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{benefits.map((benefit, index) => (
							<div
								key={index}
								className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
								style={{
									backgroundColor: hexToRgba(colors.primaryLight, 0.1),
									borderColor: colors.border,
								}}
							>
								<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
									{benefit.title}
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									{benefit.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Who It's For */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
				<div className="mx-auto max-w-4xl text-center">
					<h2
						className="animate-on-scroll mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Who It's For
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Retirement Homes
							</h3>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Long-Term Care Operators
							</h3>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Regional / Chain-Level Leadership
							</h3>
						</div>
					</div>
				</div>
			</section>

			{/* Proof / Traction */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-4xl text-center">
					<h2
						className="animate-on-scroll mb-12 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Building Trust
					</h2>
					<p
						className="animate-on-scroll text-lg leading-relaxed"
						style={{ color: colors.textSecondary }}
					>
						We're working with senior care operators to transform how they analyze and respond to incidents. 
						Contact us to learn about our pilots and early adopters.
					</p>
				</div>
			</section>

			{/* Final CTA */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundColor: hexToRgba(colors.primary, 0.1) }}>
				<div className="mx-auto max-w-4xl text-center">
					<h2
						className="animate-on-scroll mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Ready to Transform Your Incident Analysis?
					</h2>
					<Link
						to="/contact"
						className="inline-block rounded-lg px-8 py-4 text-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg"
						style={{
							backgroundColor: colors.primary,
							color: colors.text,
							boxShadow: `0 0 20px ${colors.shadow}`,
						}}
					>
						Request a Demo
					</Link>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
