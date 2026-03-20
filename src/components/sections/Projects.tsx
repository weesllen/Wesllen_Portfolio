import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { projects, type Project } from "@/data/projects";

export function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="projects" className="py-24 bg-black border-t border-white/5 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -z-10"
        style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, rgba(6,182,212,0.06) 50%, rgba(59,130,246,0.05) 100%)' }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("projects.title")} <span className="text-gradient-brand">{t("projects.titleHighlight")}</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
                className="group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] flex flex-col"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">{t("projects.viewDetails")}</span>
                  </div>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:via-cyan-400 group-hover:to-blue-400 transition-all">
                    {t(`projects.items.${project.translationKey}.title`, { defaultValue: project.title })}
                  </h3>
                  <p className="text-sm text-white/60 mb-4 flex-1 line-clamp-2 text-justify">
                    {t(`projects.items.${project.translationKey}.subtitle`, { defaultValue: project.subtitle })}
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
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl max-h-[90vh] lg:h-[75vh] bg-[#0a0a0a] border border-white/10 rounded-xl z-50 shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full backdrop-blur-md transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Image Carousel */}
              <div className="w-full lg:w-[60%] relative bg-[#0a0a0a] group min-h-[300px] lg:min-h-0 flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain absolute inset-0 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                {/* Seamless Gradient Overlay at bottom for indicators */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Navigation Buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-green-500/90 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-green-500/90 text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 shadow-sm ${currentImageIndex === idx ? 'bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 w-8' : 'bg-white/50 hover:bg-white w-2'}`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Details */}
              <div className="w-full lg:w-[40%] p-6 lg:p-10 flex flex-col overflow-y-auto bg-[#0a0a0a] border-l border-white/10">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {t(`projects.items.${selectedProject.translationKey}.title`, { defaultValue: selectedProject.title })}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 font-medium mb-6">
                  {t(`projects.items.${selectedProject.translationKey}.subtitle`, { defaultValue: selectedProject.subtitle })}
                </p>

                <div className="space-y-6 flex-1">
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">{t("projects.about")}</h4>
                    <p className="text-white/60 leading-relaxed text-sm lg:text-base text-justify">
                      {t(`projects.items.${selectedProject.translationKey}.description`, { defaultValue: selectedProject.description })}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">{t("projects.techs")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-md text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white font-bold h-12 flex items-center justify-center gap-2 transition-all border-0 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.45)]">
                      {t("projects.access")} <ExternalLink className="w-4 h-4" />
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
