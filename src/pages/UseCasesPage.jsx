import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const UseCasesPage = () => {
	const { colors } = useTheme();

	const useCases = [
		{
			role: "Executive / Operator",
			problem: "Lack of visibility into incident patterns across facilities. Reactive decision-making based on incomplete data. Difficulty identifying systemic issues before they escalate.",
			howHelps: "Provides clear, executive-level insights into incident trends, risk factors, and patterns across all facilities. Enables data-driven strategic decisions about resource allocation and prevention initiatives.",
			outcome: "Proactive risk management, better resource allocation, improved compliance documentation, and reduced operational blind spots.",
		},
		{
			role: "Clinical Leadership",
			problem: "Fragmented data across multiple systems makes it difficult to identify care plan effectiveness. No clear view of which interventions work and which don't. Manual reporting takes time away from clinical work.",
			howHelps: "Automates analysis of care plan outcomes, identifies effective interventions, and highlights residents who need attention. Cross-references behavioral, falls, and hydration data to reveal patterns.",
			outcome: "More effective care plans, reduced manual reporting time, better resident outcomes, and data-backed clinical decisions.",
		},
		{
			role: "Quality & Risk Teams",
			problem: "Compliance documentation is time-consuming and error-prone. Difficult to demonstrate proactive risk management to regulators. No clear way to measure prevention program effectiveness.",
			howHelps: "Automatically generates accurate compliance documentation. Provides clear metrics on prevention program effectiveness. Identifies risk trends before they become compliance issues.",
			outcome: "Accurate, automated compliance documentation. Clear prevention metrics. Reduced regulatory risk. More time for quality improvement initiatives.",
		},
	];

	return (
		<div className="min-h-screen px-4 py-20 md:px-8 lg:px-12">
			<div className="mx-auto max-w-6xl">
				{/* Page Header */}
				<div className="mb-16 text-center">
					<h1
						className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl"
						style={{ color: colors.text }}
					>
						Use Cases
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						How Ascenix is used day to day
					</p>
				</div>

				{/* Use Cases by Role */}
				<div className="space-y-16">
					{useCases.map((useCase, index) => (
						<section
							key={index}
							className="rounded-3xl border p-8 md:p-12 transition-all duration-300 hover:scale-[1.01]"
							style={{
								backgroundColor: index % 2 === 0 ? hexToRgba(colors.primaryLight, 0.05) : hexToRgba(colors.accent, 0.05),
								borderColor: colors.border,
							}}
						>
							<h2
								className="mb-8 text-4xl font-extrabold md:text-5xl"
								style={{ color: colors.text }}
							>
								{useCase.role}
							</h2>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
								<div
									className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: hexToRgba(colors.error, 0.1),
										borderColor: colors.borderLight,
									}}
								>
									<h3 className="mb-4 text-xl font-bold" style={{ color: colors.text }}>
										The Problem
									</h3>
									<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
										{useCase.problem}
									</p>
								</div>
								<div
									className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: hexToRgba(colors.primary, 0.1),
										borderColor: colors.borderLight,
									}}
								>
									<h3 className="mb-4 text-xl font-bold" style={{ color: colors.text }}>
										How Ascenix Helps
									</h3>
									<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
										{useCase.howHelps}
									</p>
								</div>
								<div
									className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: hexToRgba(colors.accent, 0.1),
										borderColor: colors.borderLight,
									}}
								>
									<h3 className="mb-4 text-xl font-bold" style={{ color: colors.text }}>
										The Outcome
									</h3>
									<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
										{useCase.outcome}
									</p>
								</div>
							</div>
						</section>
					))}
				</div>

				{/* Real-World Example */}
				<section className="mt-24 rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
					<h2
						className="mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Example: Multi-Facility Operator
					</h2>
					<div className="space-y-6">
						<div className="rounded-xl border p-6" style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primary, 0.05) }}>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								<strong style={{ color: colors.text }}>Monday Morning:</strong> Executive reviews weekly incident summary across all 12 facilities. Identifies that Facility B has a 40% increase in falls during evening shifts, specifically in the north wing.
							</p>
						</div>
						<div className="rounded-xl border p-6" style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primary, 0.05) }}>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								<strong style={{ color: colors.text }}>Tuesday:</strong> Clinical leadership drills into Facility B data. Discovers pattern: falls correlate with medication timing and low hydration levels. System suggests intervention: adjust medication schedule and increase hydration monitoring.
							</p>
						</div>
						<div className="rounded-xl border p-6" style={{ borderColor: colors.borderLight, backgroundColor: hexToRgba(colors.primary, 0.05) }}>
							<p className="text-base leading-relaxed" style={{ color: colors.textSecondary }}>
								<strong style={{ color: colors.text }}>Two Weeks Later:</strong> Quality team reviews metrics. Falls in Facility B north wing reduced by 60%. System automatically generated compliance documentation showing proactive intervention.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default UseCasesPage;
