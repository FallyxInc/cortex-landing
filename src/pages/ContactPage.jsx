import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { hexToRgba } from "../utils/colorUtils";

const ContactPage = () => {
	const { colors } = useTheme();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// TODO: Add actual form submission logic
	};

	const contactInfo = [
		{
			icon: "📧",
			title: "Email",
			content: "contact@ascenix.com",
			link: "mailto:contact@ascenix.com",
		},
		{
			icon: "📞",
			title: "Phone",
			content: "+1 (647) 999-9999",
			link: "tel:+16479999999",
		},
		{
			icon: "📍",
			title: "Location",
			content: "Toronto, ON",
			link: null,
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
						Contact Us
					</h1>
					<p
						className="text-xl leading-relaxed md:text-2xl"
						style={{ color: colors.textSecondary }}
					>
						Request a demo or get in touch
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Contact Information */}
					<div
						className="rounded-3xl border p-8 md:p-12 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
						style={{
							backgroundColor: hexToRgba(colors.primaryLight, 0.1),
							borderColor: colors.border,
						}}
					>
						<h3 className="mb-8 text-3xl font-extrabold" style={{ color: colors.text }}>
							Contact Information
						</h3>
						<div className="flex flex-col gap-6">
							{contactInfo.map((info, index) => (
								<div
									key={index}
									className="flex items-start gap-4 rounded-xl border p-6 transition-all duration-300 hover:scale-105"
									style={{
										backgroundColor: hexToRgba(colors.primary, 0.05),
										borderColor: colors.borderLight,
									}}
								>
									<div className="text-4xl transition-transform duration-300 hover:scale-110">
										{info.icon}
									</div>
									<div className="flex-1">
										<h4 className="mb-2 text-xl font-bold" style={{ color: colors.text }}>
											{info.title}
										</h4>
										{info.link ? (
											<a
												href={info.link}
												className="transition-colors duration-300 link-hover"
												style={{ color: colors.textSecondary }}
											>
												{info.content}
											</a>
										) : (
											<p style={{ color: colors.textSecondary }}>{info.content}</p>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Contact Form */}
					<div
						className="rounded-3xl border p-8 md:p-12 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
						style={{
							backgroundColor: hexToRgba(colors.primaryLight, 0.1),
							borderColor: colors.border,
						}}
					>
						<h3 className="mb-8 text-3xl font-extrabold" style={{ color: colors.text }}>
							Request a Demo
						</h3>
						<p
							className="mb-6 text-sm leading-relaxed"
							style={{ color: colors.textSecondary }}
						>
							Fill out the form below and we'll get back to you to schedule a demo. We'll show you how Ascenix can transform your incident analysis.
						</p>
						<form onSubmit={handleSubmit} className="flex flex-col gap-6">
							<div>
								<label
									htmlFor="name"
									className="mb-2 block text-sm font-medium"
									style={{ color: colors.textSecondary }}
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
									style={{
										backgroundColor: colors.surfaceElevated,
										borderColor: colors.border,
										color: colors.text,
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = "none";
									}}
									placeholder="Your name"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="mb-2 block text-sm font-medium"
									style={{ color: colors.textSecondary }}
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
									style={{
										backgroundColor: colors.surfaceElevated,
										borderColor: colors.border,
										color: colors.text,
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = "none";
									}}
									placeholder="your.email@example.com"
								/>
							</div>
							<div>
								<label
									htmlFor="company"
									className="mb-2 block text-sm font-medium"
									style={{ color: colors.textSecondary }}
								>
									Company / Facility
								</label>
								<input
									type="text"
									id="company"
									name="company"
									value={formData.company}
									onChange={handleChange}
									className="w-full rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
									style={{
										backgroundColor: colors.surfaceElevated,
										borderColor: colors.border,
										color: colors.text,
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = "none";
									}}
									placeholder="Your company or facility name"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="mb-2 block text-sm font-medium"
									style={{ color: colors.textSecondary }}
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={5}
									className="w-full resize-none rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
									style={{
										backgroundColor: colors.surfaceElevated,
										borderColor: colors.border,
										color: colors.text,
									}}
									onFocus={(e) => {
										e.currentTarget.style.borderColor = colors.primary;
										e.currentTarget.style.boxShadow = `0 0 0 2px ${colors.primary}33`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.borderColor = colors.border;
										e.currentTarget.style.boxShadow = "none";
									}}
									placeholder="Tell us about your needs or questions..."
								/>
							</div>
							<button
								type="submit"
								className="w-full rounded-lg px-6 py-4 text-lg font-bold transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg"
								style={{
									backgroundColor: colors.primary,
									color: colors.text,
									boxShadow: `0 0 20px ${colors.shadow}`,
								}}
							>
								Request Demo
							</button>
						</form>
					</div>
				</div>

				{/* What Happens Next */}
				<div className="mt-16 rounded-3xl border p-8 md:p-12 text-center" style={{ borderColor: colors.border, backgroundColor: hexToRgba(colors.primary, 0.1) }}>
					<h3 className="mb-4 text-2xl font-extrabold" style={{ color: colors.text }}>
						What Happens Next
					</h3>
					<p className="text-base leading-relaxed md:text-lg" style={{ color: colors.textSecondary }}>
						We'll review your request and get back to you within 24 hours to schedule a demo. 
						During the demo, we'll show you how Ascenix works with your data and answer any questions you have.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
