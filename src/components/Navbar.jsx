import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// close mobile menu on route change
	useEffect(() => {
		setOpen(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [location.pathname]);

	const linkBase = "hover:text-brand-300 transition-colors";
	const active = "text-brand-300 font-medium";

	return (
		<header
			className={`sticky top-0 z-50 transition-all ${
				scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-bg/70 border-b border-white/5" : ""
			}`}>
			<div className="container flex h-16 items-center justify-between">
				<Link to="/" className="font-display text-lg md:text-xl tracking-tight hover:opacity-90">
					Sajjad Abdullah
				</Link>

				{/* Desktop menu */}
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink
						to="/projects"
						className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
						Projects
					</NavLink>
					<NavLink
						to="/skills"
						className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
						Skills
					</NavLink>
					<NavLink
						to="/experience"
						className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
						Experience
					</NavLink>
					<NavLink
						to="/contact"
						className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
						Contact
					</NavLink>
					<a className="chip" href="https://github.com/sajid1545" target="_blank" rel="noreferrer">
						<Github size={16} />
						GitHub
					</a>
				</nav>

				{/* Mobile menu toggle */}
				<button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
					<Menu />
				</button>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className="md:hidden border-t border-white/10">
					<div className="container py-3 flex flex-col gap-3">
						<NavLink
							to="/projects"
							onClick={() => setOpen(false)}
							className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
							Projects
						</NavLink>
						<NavLink
							to="/skills"
							onClick={() => setOpen(false)}
							className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
							Skills
						</NavLink>
						<NavLink
							to="/experience"
							onClick={() => setOpen(false)}
							className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
							Experience
						</NavLink>
						<NavLink
							to="/contact"
							onClick={() => setOpen(false)}
							className={({ isActive }) => `${linkBase} ${isActive ? active : ""}`}>
							Contact
						</NavLink>

						<div className="flex gap-3 pt-2">
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
			)}
		</header>
	);
}
