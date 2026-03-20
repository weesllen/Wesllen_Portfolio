import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
  SiSpring, SiPython, SiDjango, SiNodedotjs, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiVercel, SiN8N, SiClickup, SiOpenai, SiGithubcopilot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Layers } from "lucide-react";

const EMPTY_SLOT = { name: "", icon: null, empty: true };

const stackData = [
  {
    titleKey: "stacks.frontend",
    gradientFrom: "from-cyan-500/10",
    borderHover: "hover:border-cyan-500/30",
    glowColor: "rgba(6,182,212,0.08)",
    iconColor: "text-cyan-400",
    lineColor: "via-cyan-500/50",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, empty: false },
      { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-400" />, empty: false },
      { name: "React", icon: <SiReact className="w-8 h-8 text-cyan-400" />, empty: false },
      { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 text-white" />, empty: false },
      { name: "HTML5 & CSS", icon: <SiHtml5 className="w-8 h-8 text-orange-500" />, empty: false },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-teal-400" />, empty: false },
      EMPTY_SLOT,
      EMPTY_SLOT,
    ],
    delay: 0.1,
  },
  {
    titleKey: "stacks.backend",
    gradientFrom: "from-blue-500/10",
    borderHover: "hover:border-blue-500/30",
    glowColor: "rgba(59,130,246,0.08)",
    iconColor: "text-blue-400",
    lineColor: "via-blue-500/50",
    skills: [
      { name: "Java", icon: <FaJava className="w-8 h-8 text-red-400" />, empty: false },
      { name: "Spring Boot", icon: <SiSpring className="w-8 h-8 text-green-400" />, empty: false },
      { name: "Python", icon: <SiPython className="w-8 h-8 text-yellow-300" />, empty: false },
      { name: "Django REST", icon: <SiDjango className="w-8 h-8 text-emerald-600" />, empty: false },
      { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-500" />, empty: false },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8 text-blue-400" />, empty: false },
      { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-300" />, empty: false },
      { name: "Payload CMS", icon: <Layers className="w-8 h-8 text-purple-400" />, empty: false },
    ],
    delay: 0.2,
  },
  {
    titleKey: "stacks.other",
    gradientFrom: "from-emerald-500/10",
    borderHover: "hover:border-emerald-500/30",
    glowColor: "rgba(16,185,129,0.08)",
    iconColor: "text-emerald-400",
    lineColor: "via-emerald-500/50",
    skills: [
      { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-500" />, empty: false },
      { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-400" />, empty: false },
      { name: "N8N", icon: <SiN8N className="w-8 h-8 text-rose-400" />, empty: false },
      { name: "Vercel", icon: <SiVercel className="w-8 h-8 text-white" />, empty: false },
      { name: "ClickUp", icon: <SiClickup className="w-8 h-8 text-violet-400" />, empty: false },
      { name: "OpenAI", icon: <SiOpenai className="w-8 h-8 text-white/90" />, empty: false },
      { name: "Copilot", icon: <SiGithubcopilot className="w-8 h-8 text-white/80" />, empty: false },
      EMPTY_SLOT,
    ],
    delay: 0.3,
  },
];

export function Stacks() {
  const { t } = useTranslation();

  return (
    <section id="stacks" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, rgba(6,182,212,0.05) 50%, rgba(59,130,246,0.04) 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("stacks.title")} <span className="text-gradient-brand">{t("stacks.titleHighlight")}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t("stacks.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stackData.map((category) => (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: category.delay }}
                className={`bg-zinc-900 border border-white/5 rounded-2xl p-8 ${category.borderHover} transition-colors duration-300 relative group overflow-hidden`}
              >
                {/* Hover glow line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${category.lineColor.replace("via-", "via-").replace("/50", "/0")} to-transparent group-hover:${category.lineColor} transition-all duration-500`} />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top, ${category.glowColor} 0%, transparent 70%)` }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className={`text-xl font-bold text-white mb-6 ${category.iconColor}`}>
                    {t(category.titleKey)}
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, idx) =>
                      skill.empty ? (
                        <div
                          key={`empty-${idx}`}
                          className="flex flex-col items-center justify-center p-4 bg-black/20 border border-dashed border-white/8 rounded-xl opacity-30 cursor-default"
                        >
                          <div className="w-8 h-8 rounded-lg border border-dashed border-white/20 flex items-center justify-center">
                            <span className="text-white/30 text-lg leading-none">+</span>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center gap-2 p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/15 hover:bg-black/60 transition-all cursor-default group/skill"
                        >
                          <div className="transition-transform duration-200 group-hover/skill:scale-110">
                            {skill.icon}
                          </div>
                          <span className="text-xs font-medium text-white/70 text-center leading-tight">
                            {skill.name}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
