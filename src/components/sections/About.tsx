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
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="relative group w-full max-w-[280px] md:max-w-sm lg:max-w-md mx-auto md:mx-0 shrink-0">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5">
                <img
                  src="https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQTl2I55ffikGR6Am5SOxrNZ2PbEBsTWqu0IHc"
                  alt="Wesllen Correia"
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="flex-1 text-white/70 text-lg leading-relaxed text-justify flex flex-col">
              <p className="mb-6">
                {t("about.p1_intro")} <strong className="text-white">{t("about.p1_name")}</strong>{" "}
                {t("about.p1_middle")}{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                  {t("about.p1_highlight")}
                </strong>
                {t("about.p1_rest")}
              </p>
              <p className="mb-6">{t("about.p2")}</p>
              <p className="mb-8">{t("about.p3")}</p>

              <div className="mt-auto text-center md:text-left">
                <a href="https://aqxqxu306f.ufs.sh/f/GF3FXbjYZpCQEoektS77RAQGXKWrj8VTBtaCLpO92PnYvMyk" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white gap-3 px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] border-0">
                    <Download size={22} />
                    {t("about.downloadCV")}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
