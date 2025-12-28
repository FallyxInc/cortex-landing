import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const WhyWeBuiltThisPage = () => {
	const { colors } = useTheme();

	const reasons = [
		{
			title: "What We Saw Was Broken",
			content: "Senior care operators are drowning in data but starving for insights. Incident reports pile up, but no one has time to analyze patterns. Critical information lives in silos—PCC, staff notes, separate systems—making it impossible to see the full picture.",
		},
		{
			title: "Why Existing Tools Weren't Enough",
			content: "Traditional tools are reactive. They alert you after something happens, but they don't help you understand why it happened or how to prevent it. More dashboards don't solve the problem—operators need analysis, not more data to interpret.",
		},
		{
			title: "Why Analysis, Not Alerts",
			content: "Alerts tell you something happened. Analysis tells you why it happened and how to prevent it. We believe the future of senior care is predictive and preventive, not reactive. That requires understanding patterns across all data sources, not just monitoring individual metrics.",
		},
		{
			title: "Where We Believe Senior Care Is Heading",
			content: "The industry is moving toward data-driven, preventive care. Operators who can identify risks before they become incidents will provide better care, reduce costs, and improve outcomes. We're building the platform that makes that possible.",
		},
	];

	return (
		<div className="min-h-screen px-4 py-20 md:px-8 lg:px-12">
			<div className="mx-auto max-w-4xl">
				{/* Page Header */}
				<div className="mb-16 text-center">
					<h1
						className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl"
						style={{ color: colors.text }}
					>
						Why We Built This
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						This is not marketing copy. It's intent.
					</p>
				</div>

				{/* Reasons */}
				<div className="space-y-12">
					{reasons.map((reason, index) => (
						<section
							key={index}
							className="rounded-2xl border p-8 md:p-12 transition-all duration-300 hover:scale-[1.01]"
							style={{
								backgroundColor: index % 2 === 0 ? hexToRgba(colors.primaryLight, 0.05) : hexToRgba(colors.accent, 0.05),
								borderColor: colors.border,
							}}
						>
							<h2
								className="mb-6 text-3xl font-extrabold md:text-4xl"
								style={{ color: colors.text }}
							>
								{reason.title}
							</h2>
							<p
								className="text-lg leading-relaxed"
								style={{ color: colors.textSecondary }}
							>
								{reason.content}
							</p>
						</section>
					))}
				</div>

				{/* Vision Statement */}
				<section className="mt-24 rounded-3xl border p-8 md:p-12 text-center" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primary, 0.1) }}>
					<h2
						className="mb-6 text-3xl font-extrabold md:text-4xl"
						style={{ color: colors.text }}
					>
						Our Commitment
					</h2>
					<p
						className="text-lg leading-relaxed md:text-xl"
						style={{ color: colors.textSecondary }}
					>
						We're building Ascenix because we believe senior care operators deserve better tools. 
						Tools that save time, improve outcomes, and help prevent incidents before they happen. 
						Short, honest, grounded in what we've seen and what we believe is possible.
					</p>
				</section>
			</div>
		</div>
	);
};

export default WhyWeBuiltThisPage;
