import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("contact.title")} <span className="text-gradient-brand">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-white/60 mb-12">
            {t("contact.subtitle")}
          </p>

          <form className="space-y-6 text-left bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">{t("contact.name")}</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">{t("contact.email")}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/80">{t("contact.message")}</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder={t("contact.messagePlaceholder")}
              ></textarea>
            </div>

            <Button className="w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-600 hover:via-cyan-600 hover:to-blue-600 text-white border-0 py-6 text-lg font-medium shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all">
              {t("contact.send")}
            </Button>
          </form>

          <div className="mt-16 flex justify-center gap-8">
            <a
              href="https://wa.me/5571993315410?text=Ol%C3%A1%20Wesllen!%20Vi%20o%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-400/30 hover:bg-cyan-400/5 min-w-[140px]"
            >
              <MessageCircle className="w-8 h-8" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-bold">WhatsApp</span>
              </div>
            </a>
            <a
              href="mailto:wesllen_santtos@hotmail.com"
              className="text-white/60 hover:text-blue-400 transition-colors flex flex-col items-center gap-2 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-blue-400/30 hover:bg-blue-400/5 min-w-[140px]"
            >
              <Mail className="w-8 h-8" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm font-bold">E-mail</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
