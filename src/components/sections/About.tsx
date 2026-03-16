import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto border border-green-500/30 p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Quem <span className="text-gradient-green">Sou</span>
          </h2>
          <div className="w-full text-white/70 text-lg leading-relaxed text-justify">
            <div className="relative group w-full max-w-[280px] md:max-w-sm lg:max-w-md float-left mr-6 mb-4 md:mr-10 md:mb-6">
              <div className="aspect-square rounded-2xl overflow-hidden relative z-10 bg-white/5 flex items-center justify-center">
                <img
                  src="https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQTl2I55ffikGR6Am5SOxrNZ2PbEBsTWqu0IHc"
                  alt="Wesllen Correia"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <p className="mb-6">
              Meu nome é <strong className="text-white">Wesllen Correia</strong> e sou um <strong className="text-green-400">Desenvolvedor em formação com foco em Full-Stack</strong>. Atualmente curso Ciência da Computação e venho desenvolvendo projetos pessoais e projetos reais como freelancer, utilizando tecnologias modernas para a web.
            </p>
            <p className="mb-6">
              Venho de uma transição de carreira, experiência que me permitiu adquirir uma boa base de vivência profissional, além de desenvolver habilidades comportamentais importantes para o ambiente de trabalho. Ao longo dessa trajetória, construí competências como organização, comunicação, trabalho em equipe e capacidade de adaptação, que hoje considero fundamentais na minha atuação como desenvolvedor.
            </p>
            <p className="mb-6">
              Tenho familiaridade com o desenvolvimento de aplicações completas, do front-end ao back-end, sempre buscando evoluir tecnicamente e entender o impacto real das soluções que construo.
            </p>
            <p className="mb-6">
              Me considero uma pessoa motivada, colaborativa e de aprendizado rápido, com facilidade para trabalhar em equipe e lidar com diferentes desafios. Estou sempre em busca de evoluir, aprender e contribuir, acreditando que a tecnologia é uma ferramenta poderosa para transformar ideias em soluções reais.
            </p>

            <div className="pt-6 pb-2 text-center clear-both">
              <a href="https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQCamhB3qe3g9inHVhvDG0uJOzK7RUf1PbpoxA" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-500 text-white gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                  <Download size={22} />
                  Baixar CV
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
