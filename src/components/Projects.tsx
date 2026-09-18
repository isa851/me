"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";

const projectKeys = [
  { id: "vistyle", link: "https://bestyle.geekspro.kg/" },
  { id: "promontaj" },
  { id: "omur", link: "https://omur.geekspro.kg/" },
  { id: "oba", link: "https://oba.geekspro.kg/" },
  { id: "enactus", link: "https://enactus.kg" },
  { id: "balajan", link: "https://balajan.aiba.kg/" },
  { id: "bilimordo", link: "https://abo.aiba.kg/" },
  { id: "geekspro", link: "https://geekspro.kg" },
  { id: "ktw", link: "https://ktw.kg" }
];

export default function Projects() {
  const t = useTranslations("Projects");
  const tList = useTranslations("ProjectsList");

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectKeys.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-6 flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {tList(`${project.id}.name`)}
                  </h3>
                  <span className="text-sm text-primary">{tList(`${project.id}.role`)} &bull; {tList(`${project.id}.date`)}</span>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
              
              <p className="text-text-muted flex-grow">
                {tList(`${project.id}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
