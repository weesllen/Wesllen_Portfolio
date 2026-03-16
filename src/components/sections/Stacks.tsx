import { motion } from "framer-motion";
import { Layout, Server, Wrench } from "lucide-react";

export function Stacks() {
  const stackCategories = [
    {
      title: "Front-end",
      icon: <Layout className="w-6 h-6 text-green-400" />,
      skills: [
        "JavaScript / TypeScript",
        "React",
        "Next.js",
        "HTML5 / CSS",
        "Tailwind CSS",
        "Shadcn/ui"
      ],
      delay: 0.1,
    },
    {
      title: "Back-end & Dados",
      icon: <Server className="w-6 h-6 text-green-400" />,
      skills: [
        "Java / Spring Boot",
        "Python / Django REST",
        "Node.js / Express",
        "PostgreSQL",
        "MySQL",
        "Payload CMS"
      ],
      delay: 0.2,
    },
    {
      title: "Outras Tecnologias",
      icon: <Wrench className="w-6 h-6 text-green-400" />,
      skills: [
        "Git",
        "Docker",
        "N8N (Automação)",
        "Metodologias Ágeis",
        "Vercel"
      ],
      delay: 0.3,
    },
  ];

  return (
    <section id="stacks" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background element for a premium glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      
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
              Minhas <span className="text-gradient-green">Stacks</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Principais tecnologias e ferramentas que compõem meu ecossistema de desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stackCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: category.delay }}
                className="bg-zinc-900 border border-white/5 rounded-2xl p-8 hover:border-green-500/30 transition-colors duration-300 relative group overflow-hidden"
              >
                {/* Subtle Hover Glow Line for the Card */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/0 to-transparent group-hover:via-green-500/50 transition-all duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-black/40 p-3 rounded-xl border border-white/5 shadow-inner">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-4 py-3 bg-black/40 border border-white/5 rounded-xl text-md font-medium text-white/80 hover:text-green-400 hover:border-green-500/30 hover:bg-black/60 transition-all shadow-sm flex items-center gap-3 cursor-default"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
                        {skill}
                      </div>
                    ))}
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
