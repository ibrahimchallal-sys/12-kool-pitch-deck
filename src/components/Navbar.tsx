import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#probleme", label: "Problème" },
  { href: "#solution", label: "Solution" },
  { href: "#marche", label: "Marché" },
  { href: "#business", label: "Business" },
  { href: "#finance", label: "Finance" },
  { href: "#juridique", label: "Juridique" },
  { href: "#risques", label: "Risques" },
  { href: "#strategie", label: "Stratégie" },
  { href: "#equipe", label: "Équipe" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.href.replace("#", ""));
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_20px_hsl(0_0%_0%/0.08)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3.5 px-4 md:px-8 lg:px-12">
        <a href="#hero" className="font-display text-xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
          12 Kool
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
                activeSection === l.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/8"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#probleme"
          className="hidden lg:inline-flex items-center gap-1.5 bg-primary text-white font-display font-semibold text-sm px-4 py-2 rounded-xl shadow-[0_2px_12px_hsl(24_95%_50%/0.3)] hover:shadow-[0_4px_20px_hsl(24_95%_50%/0.45)] hover:-translate-y-0.5 transition-all"
        >
          Voir le projet
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground hover:text-primary transition-colors p-1"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-border px-6 py-4 space-y-1 shadow-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block text-sm font-medium px-3 py-2 rounded-lg transition-all ${
                activeSection === l.href.replace("#", "")
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/8"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
