const ProblemItem = ({ number, title, description }) => {
	return (
		<div className="animate-on-scroll hover-lift hover-glow flex gap-4 rounded-lg border-l-4 border-[#ff0066] bg-[#ff0066]/5 p-4 transition-all duration-300 hover:border-[#ff0066] hover:bg-[#ff0066]/10 md:gap-6 md:p-6">
			<div className="shrink-0">
				<div className="hover-scale flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff0066] to-[#ff3366] text-lg font-bold text-white transition-transform duration-300 md:h-12 md:w-12 md:text-xl">
					{number}
				</div>
			</div>
			<div>
				<h3 className="mb-2 text-lg font-bold text-white md:text-xl">
					{title}
				</h3>
				<p className="text-sm leading-relaxed text-white/70 md:text-base">
					{description}
				</p>
			</div>
		</div>
	);
};

const Problem = () => {
	const problems = [
		{
			number: 1,
			title: "Data Mismanagement",
			description:
				"Understanding data from EHR is mismanaged. Critical health information gets lost in complex systems, making it difficult for caregivers to make informed decisions.",
		},
		{
			number: 2,
			title: "Execution Breakdown",
			description:
				"Homes can't execute on the information they get from residents & operations are a nightmare. The disconnect between data and action leads to inefficiencies and compromised care.",
		},
		{
			number: 3,
			title: "Outdated Technology",
			description:
				"Current systems in homes are outdated like pendants, call bells & intercoms. Legacy technology fails to meet modern care standards and resident expectations.",
		},
	];

	return (
		<section
			id="problem"
			className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
		>
			<div className="mx-auto">
				<div className="animate-on-scroll mb-12 text-center">
					<h2 className="mb-4 text-2xl font-extrabold md:mb-6 md:text-5xl lg:text-6xl">
						The Problem
					</h2>
				</div>

				<div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="animate-on-scroll hover-glow hover-scale relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-3xl border-2 border-[#ff0066]/30 bg-gradient-to-br from-[#ff0066]/20 to-[#ff3366]/10 text-6xl transition-all duration-300 md:h-[500px] md:text-7xl lg:h-[600px] lg:text-8xl">
						<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,102,0.1),transparent_50%)]"></div>
						<span className="hover-scale relative z-10 transition-transform duration-300">
							⚠️
						</span>
					</div>

					<div className="flex flex-col gap-6 md:gap-8">
						{problems.map((problem) => (
							<ProblemItem key={problem.number} {...problem} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Problem;
