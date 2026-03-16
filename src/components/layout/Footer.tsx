import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 py-8 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-green-500/10 blur-[50px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-6 items-center">
          {/* Logo Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-gradient-green opacity-90 hover:opacity-100 transition-opacity">
              <img
                src="/logo_w.png"
                alt="Logo Wesllen"
                className="w-10 h-10 object-contain -ml-2"
              />
              <div>
                Wesllen<span className="text-white">(dev);</span>
              </div>
            </a>
            <p className="text-white/50 text-sm text-center md:text-left max-w-xs">
              Transformando ideias em aplicações web modernas, performáticas e escaláveis
            </p>
          </div>

          {/* Setup / Location */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/70 text-sm font-medium">Disponível para novos projetos</span>
            </div>
            <p className="text-white/40 text-xs">Bahia, Brasil</p>
          </div>

          {/* Socials */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/weesllen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white/70 hover:text-green-400 hover:bg-green-400/10 transition-all border border-white/5 hover:border-green-400/20"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/weesllen/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white/70 hover:text-green-400 hover:bg-green-400/10 transition-all border border-white/5 hover:border-green-400/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:wesllen_santtos@hotmail.com"
              className="p-3 bg-white/5 rounded-full text-white/70 hover:text-green-400 hover:bg-green-400/10 transition-all border border-white/5 hover:border-green-400/20"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/5 mb-2" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Wesllen Correia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
