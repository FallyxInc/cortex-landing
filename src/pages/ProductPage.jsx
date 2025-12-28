import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const ProductPage = () => {
	const { colors } = useTheme();

	const modules = [
		{
			title: "Falls Analysis",
			dataUses: "Incident reports, EHR data, environmental factors",
			analyzes: "Patterns, risk factors, root causes, timing trends",
			decisions: "Prevention strategies, resident risk assessment, environmental modifications",
		},
		{
			title: "Behaviour Analysis",
			dataUses: "Behavioral incident reports, medication records, care plans",
			analyzes: "Behavioral triggers, escalation patterns, intervention effectiveness",
			decisions: "Care plan adjustments, medication reviews, staffing optimization",
		},
		{
			title: "Hydration Analysis",
			dataUses: "Intake records, vital signs, medication schedules",
			analyzes: "Hydration patterns, risk indicators, correlation with health outcomes",
			decisions: "Intervention timing, resident monitoring priorities, care protocols",
		},
		{
			title: "Incident Trend & Risk Analysis",
			dataUses: "All incident data, cross-module patterns, historical trends",
			analyzes: "Cross-incident correlations, predictive risk factors, systemic issues",
			decisions: "Strategic prevention initiatives, resource allocation, quality improvement",
		},
	];

	const analysisQuestions = [
		"Why incidents are happening",
		"Where risk is increasing",
		"Which residents or environments need intervention",
		"What patterns emerge across different data sources",
		"How to prevent incidents before they occur",
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
						How It Works
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						Deep dive into the Ascenix platform
					</p>
				</div>

				{/* Platform Overview */}
				<section className="mb-24">
					<h2
						className="mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Platform Overview
					</h2>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						<div
							className="rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">📥</div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Data In
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Seamlessly integrates with PointClickCare and other data sources. Automatic ingestion of incident reports, EHR data, and operational metrics.
							</p>
						</div>
						<div
							className="rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">🧠</div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Analysis Layer
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								AI-powered analysis engine processes data to identify patterns, causes, and risk factors across all incident types.
							</p>
						</div>
						<div
							className="rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4 text-5xl">📊</div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Outputs
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Clear, actionable insights and summaries designed for operators and clinical leaders. Not dashboards for the sake of dashboards.
							</p>
						</div>
					</div>
				</section>

				{/* Analysis Engine */}
				<section className="mb-24" style={{ backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
					<div className="rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border }}>
						<h2
							className="mb-8 text-4xl font-extrabold md:text-5xl"
							style={{ color: colors.text }}
						>
							Analysis Engine
						</h2>
						<p
							className="mb-8 text-lg leading-relaxed"
							style={{ color: colors.textSecondary }}
						>
							Our platform answers the questions that matter. Focus on outputs, not ML buzzwords.
						</p>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							{analysisQuestions.map((question, index) => (
								<div
									key={index}
									className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: hexToRgba(colors.primary, 0.1),
										borderColor: colors.borderLight,
									}}
								>
									<div className="flex items-start gap-4">
										<div
											className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
											style={{
												backgroundColor: colors.primary,
												color: colors.text,
											}}
										>
											{index + 1}
										</div>
										<p className="text-base font-medium" style={{ color: colors.text }}>
											{question}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Modules Expanded */}
				<section className="mb-24">
					<h2
						className="mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Modules (Expanded)
					</h2>
					<div className="space-y-8">
						{modules.map((module, index) => (
							<div
								key={index}
								className="rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.02]"
								style={{
									backgroundColor: hexToRgba(colors.primaryLight, 0.05),
									borderColor: colors.border,
								}}
							>
								<h3 className="mb-6 text-3xl font-bold" style={{ color: colors.text }}>
									{module.title}
								</h3>
								<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
									<div>
										<h4 className="mb-3 text-lg font-bold" style={{ color: colors.text }}>
											What Data It Uses
										</h4>
										<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
											{module.dataUses}
										</p>
									</div>
									<div>
										<h4 className="mb-3 text-lg font-bold" style={{ color: colors.text }}>
											What It Analyzes
										</h4>
										<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
											{module.analyzes}
										</p>
									</div>
									<div>
										<h4 className="mb-3 text-lg font-bold" style={{ color: colors.text }}>
											What Decisions It Supports
										</h4>
										<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
											{module.decisions}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Integrations */}
				<section className="mb-24" style={{ backgroundColor: hexToRgba(colors.accent, 0.05) }}>
					<div className="rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border }}>
						<h2
							className="mb-8 text-4xl font-extrabold md:text-5xl"
							style={{ color: colors.text }}
						>
							Integrations
						</h2>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
							<div
								className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
								style={{
									backgroundColor: hexToRgba(colors.primary, 0.1),
									borderColor: colors.borderLight,
								}}
							>
								<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
									PointClickCare
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									Seamless integration with PointClickCare and other major EHR systems. Easy setup, minimal disruption to your workflow.
								</p>
							</div>
							<div
								className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
								style={{
									backgroundColor: hexToRgba(colors.primary, 0.1),
									borderColor: colors.borderLight,
								}}
							>
								<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
									More Coming Soon
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									We're continuously expanding our integration capabilities. Contact us to discuss your specific data sources.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Security & Data Handling */}
				<section className="mb-24">
					<h2
						className="mb-8 text-4xl font-extrabold md:text-5xl"
						style={{ color: colors.text }}
					>
						Security & Data Handling
					</h2>
					<div className="rounded-2xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
									PHI-Safe
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									Built with healthcare data privacy and security as a foundation. All data handling meets healthcare industry standards.
								</p>
							</div>
							<div>
								<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
									Built for Healthcare
								</h3>
								<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
									Designed specifically for senior care environments. Understands the unique requirements and constraints of healthcare operations.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default ProductPage;
