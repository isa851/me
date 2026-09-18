"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 px-6 relative">
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

        <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-text-muted relative z-10"
          >
            <p>{t.rich("p1", { b: (chunks) => <strong className="text-white">{chunks}</strong> })}</p>
            <p>{t.rich("p2", { b: (chunks) => <strong className="text-white">{chunks}</strong> })}</p>
            <p>{t.rich("p3", { b: (chunks) => <strong className="text-white">{chunks}</strong> })}</p>
            <p>{t.rich("p4", { b: (chunks) => <strong className="text-white">{chunks}</strong> })}</p>
          </motion.div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-surface/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold mb-2">{t("education")}</h3>
              <p className="text-text-muted">{t("geeks")}</p>
              <p className="text-sm text-text-muted">{t("courses")}</p>
            </div>
            <div className="bg-surface/50 p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-semibold mb-2">{t("currentStatus")}</h3>
              <p className="text-text-muted">{t("lookingFor")}</p>
              <p className="text-sm text-text-muted">{t("available")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
