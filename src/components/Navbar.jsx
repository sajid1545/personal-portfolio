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

  const linkBase =
    "relative px-3 py-1.5 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 border border-transparent text-white/80 hover:text-white/90 hover:bg-white/5 hover:border-white/10";
  const active =
    "text-white bg-white/5 border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 supports-[backdrop-filter]:bg-bg/70 backdrop-blur"
          : "border-white/0 supports-[backdrop-filter]:bg-bg/0"
      }`}
    >
      <div className="container h-16 flex items-center justify-between">
        {/* Left-aligned logo (as requested) */}
        <Link
          to="/"
          className="font-display text-lg md:text-xl tracking-tight hover:opacity-90"
        >
          Sajjad Abdullah
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {[
            { to: "/projects", label: "Projects" },
            { to: "/experience", label: "Experience" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <span className="mx-2 h-5 w-px bg-white/10" />

          <a
            className="chip"
            href="https://github.com/sajid1545"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-x-0 top-16 z-50 md:hidden">
            <div className="container">
              <div className="glass rounded-2xl p-4 border border-white/10">
                <div className="flex flex-col gap-2 text-sm">
                  {[
                    { to: "/projects", label: "Projects" },
                    { to: "/experience", label: "Experience" },
                    { to: "/contact", label: "Contact" },
                  ].map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-lg border ${
                          isActive
                            ? "bg-white/5 text-white border-white/10"
                            : "border-transparent hover:bg-white/5 text-white/80"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}

                  <div className="pt-2 flex gap-2">
                    <a
                      className="chip"
                      href="mailto:sajjadabdullah9962@gmail.com"
                    >
                      <Mail size={16} />
                      Email
                    </a>
                    <a
                      className="chip"
                      href="https://www.linkedin.com/in/sajjad-abdullah-9962"
                      target="_blank"
                      rel="noreferrer"
                    >
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
