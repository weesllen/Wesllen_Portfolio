import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Plataforma",
    subtitle: "Loja virtual completa",
    description: "Uma loja virtual completa com carrinho de compras, integração de pagamentos e painel administrativo. Desenvolvida focando em performance, acessibilidade e uma ótima experiência de usuário.",
    images: ["https://placehold.co/600x400/1a1a1a/10b981?text=Projeto+1+-+Tela+1", "https://placehold.co/600x400/1a1a1a/059669?text=Projeto+1+-+Tela+2", "https://placehold.co/600x400/1a1a1a/047857?text=Projeto+1+-+Tela+3"],
    techs: ["React", "TypeScript", "Tailwind", "Node.js"],
    link: "#"
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    subtitle: "Painel de controle de dados corporativos",
    description: "Painel de controle com gráficos interativos, tema escuro e consumo de API em tempo real. Permite aos usuários visualizar métricas importantes de forma clara e objetiva.",
    images: ["https://placehold.co/600x400/1a1a1a/10b981?text=Projeto+2+-+Tela+1", "https://placehold.co/600x400/1a1a1a/059669?text=Projeto+2+-+Tela+2", "https://placehold.co/600x400/1a1a1a/047857?text=Projeto+2+-+Tela+3"],
    techs: ["Vite", "Recharts", "Zustand", "Tailwind"],
    link: "#"
  },
  {
    id: 3,
    title: "App de Tarefas",
    subtitle: "Produtividade e gestão pessoal",
    description: "Aplicativo de produtividade com drag-and-drop, categorias personalizadas e persistência local. Ajuda os usuários a manterem-se organizados e focados em suas metas diárias.",
    images: ["https://placehold.co/600x400/1a1a1a/10b981?text=Projeto+3+-+Tela+1", "https://placehold.co/600x400/1a1a1a/059669?text=Projeto+3+-+Tela+2", "https://placehold.co/600x400/1a1a1a/047857?text=Projeto+3+-+Tela+3"],
    techs: ["React", "Framer Motion", "CSS"],
    link: "#"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 bg-black border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meus <span className="text-gradient-green">Projetos</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Aqui estão alguns dos trabalhos recentes que desenvolvi para aprimorar minhas habilidades. Clique nos cards para ver mais detalhes.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">Ver Detalhes</span>
                  </div>
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/60 mb-4 flex-1 line-clamp-2">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techs.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-white/5 text-white/70 rounded-md border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techs.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/5 text-white/50 rounded-md border border-white/5">
                        +{project.techs.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl z-50 shadow-2xl flex flex-col lg:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Images Grid */}
              <div className="w-full lg:w-3/5 p-6 bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="grid grid-cols-2 gap-4 h-full">
                   <div className="col-span-2 rounded-xl overflow-hidden border border-white/10">
                      <img src={selectedProject.images[0]} alt={`${selectedProject.title} principal`} className="w-full h-full object-cover aspect-video" />
                   </div>
                   <div className="rounded-xl overflow-hidden border border-white/10">
                      <img src={selectedProject.images[1]} alt={`${selectedProject.title} detalhe 1`} className="w-full h-full object-cover aspect-video" />
                   </div>
                   <div className="rounded-xl overflow-hidden border border-white/10">
                      <img src={selectedProject.images[2]} alt={`${selectedProject.title} detalhe 2`} className="w-full h-full object-cover aspect-video" />
                   </div>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-2/5 p-6 lg:p-8 flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-green-400 font-medium mb-6">{selectedProject.subtitle}</p>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Sobre o Projeto</h4>
                    <p className="text-white/60 leading-relaxed text-sm lg:text-base">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white text-black hover:bg-green-400 hover:text-black font-bold h-12 flex items-center justify-center gap-2 transition-colors">
                      Acessar o Projeto <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
