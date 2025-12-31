import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";
import { Link } from "react-router-dom";

const LandingPage = () => {
	const { colors } = useTheme();

	const mainModules = [
		{
			title: "Falls Analysis",
			description: "Identify patterns, risk factors, and root causes of falls to prevent future incidents. We read the nursing notes and replace your fall tracking table with automated analysis.",
		},
		{
			title: "Behaviour Analysis",
			description: "Understand behavioral patterns and triggers to improve care plans and resident outcomes. We analyze nursing notes to spot gaps and patterns.",
		},
		{
			title: "Hydration Analysis",
			description: "Track and analyze hydration data to prevent dehydration-related health issues and predict risk before incidents occur.",
		},
	];

	const comingSoonModules = [
		"Medication Analysis",
		"Wound Care Analysis",
		"Quality Metrics Analysis",
	];

	const caseStudies = [
		{
			company: "Facility Name 1",
			quote: "Ascenix transformed how we analyze incidents. The automated analysis saves us hours every week, and we've caught compliance gaps we would have missed.",
			author: "Executive Director",
			results: "60% reduction in manual reporting time, 40% faster compliance gap identification",
		},
		{
			company: "Facility Name 2",
			quote: "Having the system read nursing notes and do the analysis for us is a game-changer. We don't have to read through every note anymore.",
			author: "Clinical Leader",
			results: "45% reduction in time spent reviewing documentation, 35% improvement in early intervention",
		},
		{
			company: "Facility Name 3",
			quote: "The fall tracking table replacement alone was worth it. Now we get insights automatically instead of maintaining spreadsheets.",
			author: "Quality & Risk Manager",
			results: "Eliminated manual fall tracking, 50% reduction in preventable falls",
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

			{/* Who It's For - Early placement for quick identification */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32" style={{ backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
				<div className="mx-auto max-w-5xl">
					<h2
						className="animate-on-scroll mb-8 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Built for Senior Care Operators
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Retirement Homes
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Independent and assisted living facilities looking to improve care quality and operational efficiency.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Long-Term Care Operators
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Operators managing long-term care facilities who need better incident analysis and compliance tracking.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Regional / Chain-Level Leadership
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Executives managing multiple facilities who need visibility across their entire operation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* The Problem - Three Clear Points */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						The Problem
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div
							className="animate-on-scroll rounded-2xl border p-8 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								It Takes Too Much Time to Manually Analyze Data
							</h3>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								Staff spend hours reading through nursing notes, compiling spreadsheets, and manually tracking incidents. This time could be spent on care.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								We Don't Spot Compliance Gaps Fast Enough
							</h3>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								By the time compliance issues are identified, it's often too late. Critical gaps in documentation and care protocols go unnoticed until audits.
							</p>
						</div>
						<div
							className="animate-on-scroll rounded-2xl border p-8 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.error, 0.05),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								We're Reactive When It Comes to Incidents
							</h3>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								We respond to incidents after they happen. We miss opportunities to prevent them—like knowing hydration intake is low would allow you to prevent future falls before they occur.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What Ascenix Does - Explicitly Clear */}
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
								Reads & Analyzes Nursing Notes
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								We read the nursing notes and do the analysis for you. You don't have to read every note—we identify patterns, spot gaps, and flag risks automatically.
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
								Replaces Your Fall Tracking Table
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								No more manual spreadsheets. We automatically generate your fall tracking table with insights, patterns, and actionable recommendations.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core Product Modules - 3 Main + Coming Soon */}
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
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{mainModules.map((module, index) => (
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
						<div
							className="animate-on-scroll rounded-2xl border-2 border-dashed p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primaryLight, 0.02),
								borderColor: colors.border,
							}}
						>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Coming Soon
							</h3>
							<ul className="space-y-2">
								{comingSoonModules.map((module, index) => (
									<li key={index} className="text-sm" style={{ color: colors.textSecondary }}>
										• {module}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* How It's Different - End-to-End Workflow */}
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
								We Do the Whole Workflow End-to-End
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								We actually read the nursing note, spot the gap, give you a table, and do your reports from end to end. This isn't just AI-driven analysis as a buzzword—we handle the entire workflow so you don't have to.
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
								By merging all data together, we create effective preventative metrics that analyzing one data point couldn't reveal. For example, connecting low hydration to fall risk.
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
								Clear, actionable insights designed for decision-makers. No raw data dumps—just the insights you need, when you need them.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Building Trust - Case Studies */}
			<section className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
				<div className="mx-auto max-w-6xl">
					<h2
						className="animate-on-scroll mb-12 text-center text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Building Trust
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{caseStudies.map((study, index) => (
							<div
								key={index}
								className="animate-on-scroll rounded-2xl border p-8 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
								style={{
									backgroundColor: hexToRgba(colors.primaryLight, 0.05),
									borderColor: colors.border,
								}}
								onClick={() => {
									// TODO: Add click handler to show more details/modal
									console.log("Show case study details for", study.company);
								}}
							>
								<h3 className="mb-4 text-xl font-bold" style={{ color: colors.text }}>
									{study.company}
								</h3>
								<blockquote className="mb-6 italic" style={{ color: colors.textSecondary }}>
									"{study.quote}"
								</blockquote>
								<div className="mb-4">
									<p className="text-sm font-semibold" style={{ color: colors.text }}>
										{study.author}
									</p>
								</div>
								<div className="rounded-lg border p-4" style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primary, 0.05) }}>
									<p className="text-sm font-semibold mb-2" style={{ color: colors.text }}>
										Results:
									</p>
									<p className="text-xs leading-relaxed" style={{ color: colors.textSecondary }}>
										{study.results}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="mt-12 text-center">
						<p className="text-sm" style={{ color: colors.textSecondary }}>
							Click on any case study to learn more about their implementation and results.
						</p>
					</div>
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
