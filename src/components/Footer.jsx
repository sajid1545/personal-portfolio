export default function Footer() {
	return (
		<footer className="border-t border-white/5 py-8 mt-16">
			<div className="container text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
				<p>© {new Date().getFullYear()} Sajjad Abdullah. All rights reserved.</p>
				<p>Built with React + Tailwind.</p>
			</div>
		</footer>
	);
}
