"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="py-24 px-6 bg-surface/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          <motion.div
            initial={{ opacity: 1, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 relative z-10 hover:border-primary/30 transition-all duration-300 shadow-xl group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {t("jobs.geekspro.company")}
                  </h3>
                  <h4 className="text-lg text-primary font-medium">
                    {t("jobs.geekspro.role")}
                  </h4>
                </div>
                <div className="mt-3 md:mt-0 px-4 py-1.5 bg-surface/50 rounded-full text-sm text-text-muted border border-white/10 w-fit">
                  {t("jobs.geekspro.date")}
                </div>
              </div>
              <p className="text-text-muted leading-relaxed relative z-10">
                {t("jobs.geekspro.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
