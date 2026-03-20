import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const navKeys = [
  { key: "nav.home", to: "hero" },
  { key: "nav.about", to: "about" },
  { key: "nav.skills", to: "stacks" },
  { key: "nav.projects", to: "projects" },
  { key: "nav.contact", to: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "pt");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const next = lang === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
    setLang(next);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-gradient-brand opacity-90 hover:opacity-100 transition-opacity">
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
          {navKeys.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="relative text-base font-bold text-white/70 hover:text-white cursor-pointer transition-all duration-300 px-1 py-2 group/link"
              activeClass="!text-cyan-400 font-extrabold is-active"
            >
              {t(link.key)}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 scale-x-0 transition-transform duration-300 origin-left group-hover/link:scale-x-100 group-[.is-active]/link:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/40 transition-all text-sm font-bold text-white/70 hover:text-white"
          title="Trocar idioma / Switch language"
        >
          <span className="text-base leading-none">{lang === "pt" ? "🇧🇷" : "🇺🇸"}</span>
          <span className="tracking-widest">{lang === "pt" ? "PT" : "EN"}</span>
        </button>
      </div>
    </header>
  );
}
