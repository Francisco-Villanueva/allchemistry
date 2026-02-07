import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#products", label: "Productos" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-12 w-full top-0 text-white flex justify-center items-center px-4 fixed z-50 transition-all duration-300 ${
        scrolled
          ? "opacity-100 bg-gray-950/70 backdrop-blur-lg border-b border-white/[0.05] shadow-sm"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between items-center container w-full h-full">
        <a href="#home" className="flex items-center gap-2">
          <img
            src={"/nav-bar.png"}
            alt="allchemistry-logo"
            className="h-7 w-7 object-cover rounded"
          />
          <span className="font-anton text-xs tracking-wider uppercase text-gray-300">
            AllChemistry
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 text-xs text-gray-400 hover:text-white rounded-md hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1.5 rounded-md hover:bg-white/[0.05] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="size-4 text-gray-300" />
          ) : (
            <Menu className="size-4 text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-gray-950/90 backdrop-blur-lg border-b border-white/[0.05]">
          <ul className="flex flex-col py-2 px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-sm text-gray-400 hover:text-white rounded-md hover:bg-white/[0.05] transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
