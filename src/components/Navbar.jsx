import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 6);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		setOpen(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.pathname]);

	const linkBase = "relative px-3 py-1.5 rounded-full transition-colors hover:text-brand-300";
	const active =
		"text-brand-300 bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]";

	const underline =
		"after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-brand-400 after:to-brand-300 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4";

	const underlineActive =
		"after:w-3/4 after:bg-gradient-to-r after:from-brand-400 after:to-brand-300";

	return (
		<header
			className={`sticky top-0 z-50 transition-all ${
				scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-bg/70 border-b border-white/5" : ""
			}`}>
			<div className="container h-16 flex items-center justify-between">
				<Link to="/" className="font-display text-lg md:text-xl tracking-tight hover:opacity-90">
					Sajjad Abdullah
				</Link>

				{/* Desktop menu */}
				<nav className="hidden md:flex items-center gap-2 text-sm">
					{[
						{ to: "/projects", label: "Projects" },
						// { to: "/skills", label: "Skills" },
						{ to: "/experience", label: "Experience" },
						{ to: "/contact", label: "Contact" },
					].map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							className={({ isActive }) =>
								`${linkBase} ${underline} ${isActive ? `${active} ${underlineActive}` : ""}`
							}>
							{link.label}
						</NavLink>
					))}

					<span className="mx-2 h-5 w-px bg-white/10" />

					<a className="chip" href="https://github.com/sajid1545" target="_blank" rel="noreferrer">
						<Github size={16} />
						GitHub
					</a>
				</nav>

				{/* Mobile toggle */}
				<button
					className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10"
					aria-label="Toggle menu"
					onClick={() => setOpen((v) => !v)}>
					{open ? <X /> : <Menu />}
				</button>
			</div>

			{/* Mobile sheet */}
			{open && (
				<>
					<div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
					<div className="fixed inset-x-0 top-16 z-50 md:hidden">
						<div className="container">
							<div className="glass rounded-2xl p-4 border border-white/10">
								<div className="flex flex-col gap-2 text-sm">
									{[
										{ to: "/projects", label: "Projects" },
										// { to: "/skills", label: "Skills" },
										{ to: "/experience", label: "Experience" },
										{ to: "/contact", label: "Contact" },
									].map((link) => (
										<NavLink
											key={link.to}
											to={link.to}
											onClick={() => setOpen(false)}
											className={({ isActive }) =>
												`px-3 py-2 rounded-lg hover:bg-white/5 ${
													isActive ? "bg-white/5 text-brand-300" : ""
												}`
											}>
											{link.label}
										</NavLink>
									))}

									<div className="pt-2 flex gap-2">
										<a className="chip" href="mailto:sajjadabdullah9962@gmail.com">
											<Mail size={16} />
											Email
										</a>
										<a
											className="chip"
											href="https://www.linkedin.com/in/sajjad-abdullah-9962"
											target="_blank"
											rel="noreferrer">
											<Linkedin size={16} />
											LinkedIn
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</header>
	);
}
