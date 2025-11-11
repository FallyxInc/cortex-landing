import { useState, useEffect } from "react";

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const testimonials = [
		{
			quote:
				"Ascenix has transformed how we care for our residents. The fall detection accuracy is incredible, and the AI assistant has become an invaluable part of our daily operations.",
			author: "Dr. Sarah Chen",
			role: "Medical Director",
			facility: "Sunrise Senior Living",
			avatar: "SC",
		},
		{
			quote:
				"The real-time monitoring and predictive analytics have helped us prevent incidents before they happen. Our staff efficiency has increased by 40% since implementation.",
			author: "Michael Patterson",
			role: "Operations Manager",
			facility: "Harmony Care Center",
			avatar: "MP",
		},
		{
			quote:
				"What impressed us most was the seamless EHR integration. No disruption to our workflow, just enhanced capabilities that make everyone's job easier.",
			author: "Jennifer Martinez",
			role: "Head Nurse",
			facility: "Comfort Home Healthcare",
			avatar: "JM",
		},
		{
			quote:
				"The peace of mind knowing our loved ones are monitored 24/7 with advanced AI is priceless. The system caught my mother's fall within seconds.",
			author: "Robert Thompson",
			role: "Family Member",
			facility: "Resident at Golden Years",
			avatar: "RT",
		},
	];

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, testimonials.length]);

	const goToSlide = (index) => {
		setCurrentIndex(index);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 10000);
	};

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 10000);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
		setIsAutoPlaying(false);
		setTimeout(() => setIsAutoPlaying(true), 10000);
	};

	return (
		<section className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden">
			<div
				className="absolute h-full w-full"
				style={{
					background:
						"radial-gradient(circle at 30% 50%, rgba(0, 212, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 50%, rgba(138, 43, 226, 0.1), transparent 50%)",
				}}
			></div>
			<div className="text-center">
				<h2 className="animate-on-scroll text-3xl leading-tight font-extrabold md:mb-6 md:text-4xl lg:text-5xl xl:text-[3.5rem]" style={{ animationDelay: "0.2s" }}>
					Trusted by Leading Care Facilities
				</h2>
				<p className="animate-on-scroll text-base text-white/60 md:text-lg" style={{ animationDelay: "0.4s" }}>
					Hear from healthcare professionals and families who've experienced the
					Ascenix difference
				</p>
			</div>

			<div className="relative z-2 w-full px-4 md:px-8 lg:px-12">
				<div className="overflow-hidden">
					<div
						className="flex transition-transform duration-700 ease-out"
						style={{ transform: `translateX(-${currentIndex * 100}%)` }}
					>
						{testimonials.map((testimonial, index) => (
							<div
								key={index}
								className="flex w-full shrink-0 justify-center px-4 md:px-4 lg:px-8"
							>
								<div
									className="w-7xl rounded-2xl border border-[#00d4ff]/20 bg-linear-to-br from-[#0066ff]/5 to-[#8a2be2]/5 px-8 backdrop-blur-sm md:rounded-3xl md:px-12 hover-glow transition-all duration-300"
									style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
								>
									<div className="flex flex-col items-center gap-8 text-center">
										<div className="flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#00d4ff]/30 bg-linear-to-br from-[#00d4ff] to-[#8a2be2] text-2xl font-extrabold md:h-24 md:w-24 md:text-3xl hover-scale transition-transform duration-300">
											{testimonial.avatar}
										</div>

										<div className="px-6 md:px-8">
											<p className="text-xl leading-relaxed text-white/90 italic md:text-2xl lg:text-3xl">
												"{testimonial.quote}"
											</p>
										</div>

										<div className="w-full max-w-[400px] border-t border-white/10 pt-8">
											<h4 className="text-lg font-bold md:text-xl">
												{testimonial.author}
											</h4>
											<p className="text-sm text-white/60 md:text-base">
												{testimonial.role}
											</p>
											<p className="text-xs text-[#00d4ff]/80 md:text-sm">
												{testimonial.facility}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<button
						onClick={prevSlide}
						className="absolute top-1/2 left-15 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/10 hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/30 md:h-14 md:w-14"
						aria-label="Previous testimonial"
					>
						<span className="text-2xl text-white">‹</span>
					</button>

					<button
						onClick={nextSlide}
						className="absolute top-1/2 right-15 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/10 hover:border-[#00d4ff]/50 hover:shadow-lg hover:shadow-[#00d4ff]/30 md:h-14 md:w-14"
						aria-label="Next testimonial"
					>
						<span className="text-2xl text-white">›</span>
					</button>
				</div>

				<div className="mt-8 flex justify-center gap-3 md:mt-12">
					{testimonials.map((_, index) => (
						<button
							key={index}
							onClick={() => goToSlide(index)}
							className={`h-2 rounded-full transition-all hover-scale ${
								index === currentIndex
									? "w-12 bg-linear-to-r from-[#0066ff] to-[#00d4ff]"
									: "w-2 bg-white/30 hover:bg-white/50 hover:w-8"
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
