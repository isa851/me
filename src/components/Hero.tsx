"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaFileDownload } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background z-0" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent font-medium tracking-wider uppercase mb-4 block">
            {t("portfolio")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t("hi")} <span className="text-gradient">Isa</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl mx-auto"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary-dark hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            {t("viewProjects")}
          </a>
          <a
            href="/resume_Islam_Abdikalilov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-surface text-white font-medium rounded-full border border-white/10 hover:bg-white/5 hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaFileDownload /> {t("downloadCV")}
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent text-text-muted font-medium rounded-full hover:text-white transition-colors"
          >
            {t("contactMe")}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-text-muted hover:text-white transition-colors">
          <FaArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
