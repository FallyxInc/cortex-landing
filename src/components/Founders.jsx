const Founders = () => {
	const founders = [
		{
			initials: "AE",
			name: "Ayaan Esmail",
			title: "Co-Founder",
		},
		{
			initials: "RM",
			name: "Rishi Mehta",
			title: "Co-Founder",
		},
	];

	return (
		<section
			id="founders"
			className="relative overflow-hidden px-10 py-8 pt-0"
			style={{
				background:
					"radial-gradient(ellipse at center, rgba(138, 43, 226, 0.1), #000)",
			}}
		>
			<div className="relative z-2 mx-auto">
				<div className="mb-12 text-center">
					<h2 className="animate-on-scroll pt-8 text-5xl leading-tight font-black">
						Our Founders
					</h2>
				</div>

				<div className="mb-8 grid grid-cols-2 items-center justify-center gap-6">
					{founders.map((founder, index) => (
						<div
							key={index}
							className="animate-on-scroll hover-lift hover-glow rounded-2xl border border-[#00d4ff]/20 bg-linear-to-br from-[#0066ff]/5 to-[#8a2be2]/5 p-8 backdrop-blur-sm transition-all duration-300 md:rounded-3xl md:p-16 lg:p-20"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="mb-8 flex flex-col items-center gap-6 text-center md:mb-12 md:gap-8 lg:mb-16 lg:gap-10">
								<div className="hover-scale flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[3px] border-[#00d4ff]/30 bg-linear-to-br from-[#00d4ff] to-[#8a2be2] text-4xl font-extrabold transition-transform duration-300 md:h-32 md:w-32 md:text-5xl lg:h-40 lg:w-40 lg:text-6xl">
									{founder.initials}
								</div>
								<div>
									<h3 className="mb-2 text-2xl font-extrabold md:mb-3 md:text-3xl lg:text-4xl">
										{founder.name}
									</h3>
									<p className="text-base text-white/60 md:text-lg lg:text-xl">
										{founder.title}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-5">
					<div className="animate-on-scroll hover-lift hover-glow flex items-center justify-center rounded-2xl border border-[#00d4ff]/20 bg-linear-to-br from-[#0066ff]/5 to-[#8a2be2]/5 p-4 backdrop-blur-sm transition-all duration-300 md:col-span-3 md:rounded-3xl md:p-6 lg:p-8">
						<div className="flex aspect-video w-full items-center justify-center rounded-lg bg-black/20">
							<a
								href="#"
								className="hover-scale inline-flex items-center justify-center gap-3 rounded-lg bg-linear-to-r from-[#00d4ff] to-[#8a2be2] px-6 py-3 text-base font-bold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-[#00d4ff]/50 md:px-8 md:py-4 md:text-lg lg:text-xl"
							>
								<svg
									className="h-6 w-6 md:h-8 md:w-8"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
								Watch Our Story
							</a>
						</div>
					</div>
					<div className="animate-on-scroll hover-lift hover-glow flex items-center rounded-2xl border border-[#00d4ff]/20 bg-linear-to-br from-[#0066ff]/5 to-[#8a2be2]/5 p-4 backdrop-blur-sm transition-all duration-300 md:col-span-2 md:rounded-3xl md:p-6 lg:p-8">
						<p className="text-base leading-relaxed text-white/90 md:text-lg lg:text-xl">
							Example text blurb about living in a retirement home.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Founders;
