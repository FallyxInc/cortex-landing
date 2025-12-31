import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const TeamPage = () => {
	const { colors } = useTheme();

	const team = [
		{
			initials: "AE",
			name: "Ayaan Esmail",
			role: "Co-Founder",
			background: "Domain experience in senior care technology and healthcare systems.",
		},
		{
			initials: "RM",
			name: "Rishi Mehta",
			role: "Co-Founder",
			background: "Execution credibility in building scalable platforms and data analysis systems.",
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
						Team
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						Who's behind this and why you should trust them
					</p>
				</div>

				{/* Team Members */}
				<div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2">
					{team.map((member, index) => (
						<div
							key={index}
							className="rounded-2xl border p-8 md:p-12 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
							style={{
								backgroundColor: hexToRgba(colors.primaryLight, 0.05),
								borderColor: colors.border,
							}}
						>
							<div
								className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-[3px] text-4xl font-extrabold transition-transform duration-300 hover:scale-110 md:h-32 md:w-32 md:text-5xl"
								style={{
									borderColor: colors.border,
									backgroundColor: colors.primary,
									color: colors.text,
								}}
							>
								{member.initials}
							</div>
							<h3 className="mb-2 text-3xl font-extrabold md:text-4xl" style={{ color: colors.text }}>
								{member.name}
							</h3>
							<p className="mb-4 text-lg md:text-xl" style={{ color: colors.textMuted }}>
								{member.role}
							</p>
							<p className="text-sm leading-relaxed md:text-base" style={{ color: colors.textSecondary }}>
								{member.background}
							</p>
						</div>
					))}
				</div>

				{/* Focus Areas */}
				<section className="mb-24 rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.accent, 0.05) }}>
					<h2
						className="mb-8 text-center text-3xl font-extrabold md:text-4xl"
						style={{ color: colors.text }}
					>
						What We Bring
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						<div
							className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Domain Experience
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Deep understanding of senior care operations, challenges, and what operators actually need.
							</p>
						</div>
						<div
							className="rounded-xl border p-6 transition-all duration-300 hover:scale-105"
							style={{
								backgroundColor: hexToRgba(colors.primary, 0.1),
								borderColor: colors.borderLight,
							}}
						>
							<h3 className="mb-3 text-xl font-bold" style={{ color: colors.text }}>
								Execution Credibility
							</h3>
							<p className="text-sm leading-relaxed" style={{ color: colors.textSecondary }}>
								Proven ability to build and deliver technology solutions that solve real problems.
							</p>
						</div>
					</div>
				</section>

				{/* Why We Built This - The Story */}
				<section className="mb-24 rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primaryLight, 0.05) }}>
					<h2
						className="mb-8 text-center text-3xl font-extrabold md:text-4xl"
						style={{ color: colors.text }}
					>
						Why We Built This
					</h2>
					<div className="mx-auto max-w-4xl space-y-8">
						<div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								What We Saw Was Broken
							</h3>
							<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
								Senior care operators are drowning in data but starving for insights. Incident reports pile up, but no one has time to analyze patterns. Critical information lives in silos—PCC, staff notes, separate systems—making it impossible to see the full picture.
							</p>
						</div>
						<div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Why Existing Tools Weren't Enough
							</h3>
							<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
								Traditional tools are reactive. They alert you after something happens, but they don't help you understand why it happened or how to prevent it. More dashboards don't solve the problem—operators need analysis, not more data to interpret.
							</p>
						</div>
						<div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Why Analysis, Not Alerts
							</h3>
							<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
								Alerts tell you something happened. Analysis tells you why it happened and how to prevent it. We believe the future of senior care is predictive and preventive, not reactive. That requires understanding patterns across all data sources, not just monitoring individual metrics.
							</p>
						</div>
						<div>
							<h3 className="mb-4 text-2xl font-bold" style={{ color: colors.text }}>
								Where We Believe Senior Care Is Heading
							</h3>
							<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
								The industry is moving toward data-driven, preventive care. Operators who can identify risks before they become incidents will provide better care, reduce costs, and improve outcomes. We're building the platform that makes that possible.
							</p>
						</div>
					</div>
				</section>

				{/* Our Vision - Personal perspective from founders */}
				<section className="rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primary, 0.1) }}>
					<h2
						className="mb-8 text-center text-3xl font-extrabold md:text-4xl"
						style={{ color: colors.text }}
					>
						Our Vision
					</h2>
					<div className="mx-auto max-w-4xl space-y-6">
						<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
							As founders of Ascenix, we believe senior care operators deserve better tools. We've seen firsthand how much time is wasted on manual analysis, how compliance gaps are missed until it's too late, and how reactive approaches lead to preventable incidents.
						</p>
						<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
							Our vision is simple: transform incident analysis from a time-consuming, reactive process into an automated, proactive system that actually prevents problems. We want to give operators the insights they need—when they need them—so they can focus on what matters most: providing excellent care.
						</p>
						<p className="text-lg leading-relaxed" style={{ color: colors.textSecondary }}>
							We're building Ascenix to be the platform that reads the notes, spots the gaps, generates the tables, and delivers the reports—end to end. No buzzwords, no half-measures. Just tools that work.
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default TeamPage;
