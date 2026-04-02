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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#hero" className="font-display text-2xl font-800 text-primary tracking-tight">
          12 Kool
        </a>

        <div className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
