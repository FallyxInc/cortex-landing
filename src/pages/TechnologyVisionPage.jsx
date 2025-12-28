import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const TechnologyVisionPage = () => {
	const { colors } = useTheme();

	const timeline = [
		{
			period: "Short-Term Focus",
			title: "Software-First Analysis Platform",
			description: "Building the core analysis platform that ingests data, identifies patterns, and produces actionable insights. Focus on falls, behaviors, hydration, and incident trend analysis.",
		},
		{
			period: "Medium-Term",
			title: "Deeper Intelligence, More Modules",
			description: "Expanding analysis capabilities with more sophisticated pattern detection. Adding new modules for additional data types and use cases. Enhanced predictive capabilities.",
		},
		{
			period: "Long-Term Vision",
			title: "Closed-Loop Risk Reduction",
			description: "Analysis → Action. The platform not only identifies risks but suggests and tracks interventions. Integration with care planning systems for automatic care plan adjustments based on insights.",
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
						Technology & Vision
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						Where this is going long-term
					</p>
				</div>

				{/* Timeline */}
				<div className="space-y-12">
					{timeline.map((item, index) => (
						<section
							key={index}
							className="rounded-2xl border p-8 md:p-12 transition-all duration-300 hover:scale-[1.01]"
							style={{
								backgroundColor: index % 2 === 0 ? hexToRgba(colors.primaryLight, 0.05) : hexToRgba(colors.accent, 0.05),
								borderColor: colors.border,
							}}
						>
							<div className="mb-4">
								<span
									className="inline-block rounded-full px-4 py-2 text-sm font-bold"
									style={{
										backgroundColor: colors.primary,
										color: colors.text,
									}}
								>
									{item.period}
								</span>
							</div>
							<h2
								className="mb-4 text-3xl font-extrabold md:text-4xl"
								style={{ color: colors.text }}
							>
								{item.title}
							</h2>
							<p
								className="text-lg leading-relaxed"
								style={{ color: colors.textSecondary }}
							>
								{item.description}
							</p>
						</section>
					))}
				</div>

				{/* R&D Note */}
				<section className="mt-24 rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primary, 0.1) }}>
					<h2
						className="mb-6 text-3xl font-extrabold md:text-4xl"
						style={{ color: colors.text }}
					>
						R&D Efforts
					</h2>
					<p
						className="text-lg leading-relaxed"
						style={{ color: colors.textSecondary }}
					>
						We're continuously exploring new technologies and approaches—including voice interfaces and hardware solutions—that could enhance our analysis capabilities. However, our current focus remains on building the best-in-class software analysis platform. These R&D efforts inform our long-term vision but don't distract from delivering immediate value today.
					</p>
				</section>
			</div>
		</div>
	);
};

export default TechnologyVisionPage;
