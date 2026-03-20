import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto border border-cyan-500/25 p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            {t("about.title")} <span className="text-gradient-brand">{t("about.titleHighlight")}</span>
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
              {t("about.p1_intro")} <strong className="text-white">{t("about.p1_name")}</strong>{" "}
              {t("about.p1_middle")}{" "}
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                {t("about.p1_highlight")}
              </strong>
              {t("about.p1_rest")}
            </p>
            <p className="mb-6">{t("about.p2")}</p>
            <p className="mb-6">{t("about.p3")}</p>
            <p className="mb-6">{t("about.p4")}</p>

            <div className="pt-6 pb-2 text-center clear-both">
              <a href="https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQHciDFx1QF9jmlg56N0su4OSITJLXoK8U7enM" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border-0">
                  <Download size={22} />
                  {t("about.downloadCV")}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
