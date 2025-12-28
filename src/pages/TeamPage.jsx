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
				<section className="rounded-3xl border p-8 md:p-12" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.accent, 0.05) }}>
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
			</div>
		</div>
	);
};

export default TeamPage;
