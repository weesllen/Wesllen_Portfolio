import { useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background decoration & Particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[120px] z-0" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 150, links: { opacity: 0.8 } },
            },
          },
          particles: {
            color: { value: "#10b981" },
            links: { color: "#10b981", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.5, direction: "none", outModes: "out" },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 opacity-50"
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-green-500 font-medium tracking-wider uppercase mb-4 text-sm md:text-lg">
              FULL STACK WEB DEVELOPER
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-4 text-white flex flex-col items-center"
          >
            <span className="text-gradient-green leading-tight">Wesllen Correia</span>
            <div className="h-1.5 w-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-4"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-xl mb-10 mt-6"
          >
            Transformando ideias em aplicações web modernas, performáticas e escaláveis
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
          >
            {/* Action Button */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById('projects');
                if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 py-6 px-8 text-lg font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 rounded-full">
                Ver Projetos
              </Button>
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/weesllen/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 h-14 w-14 rounded-full">
                  <Linkedin className="h-7 w-7" />
                </Button>
              </a>
              <a href="https://github.com/weesllen" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="outline" className="border-green-500/50 text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300 h-14 w-14 rounded-full">
                  <Github className="h-7 w-7" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Decorative ring */}
          <div className="absolute inset-0 border-2 border-green-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-green-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          <img
            src="/minimal_avatar_custom.png"
            alt="Custom minimalist dark tech avatar"
            className="w-[98%] max-w-[520px] aspect-square object-cover shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-10 border-[6px] border-[#0a0a0a]/80 bg-background/50 backdrop-blur-sm p-1 transition-all duration-500"
            style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
