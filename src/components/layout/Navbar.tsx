import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Início", to: "hero" },
  { name: "Quem sou", to: "about" },
  { name: "Habilidades", to: "stacks" },
  { name: "Projetos", to: "projects" },
  { name: "Contatos", to: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-gradient-green">
          <img 
            src="/logo_w.png" 
            alt="Logo Wesllen" 
            className="w-20 h-20 object-contain -ml-4"
          />
          <div>
            Wesllen<span className="text-white">(dev);</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-base font-bold text-white/70 hover:text-white hover:text-gradient-green cursor-pointer transition-colors"
              activeClass="text-gradient-green font-extrabold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu could go here, but keeping it simple for now */}
        <button className="md:hidden text-white/70">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
        </button>
      </div>
    </header>
  );
}
