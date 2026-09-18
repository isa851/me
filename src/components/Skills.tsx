"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const allSkills = [
  "Python", "Django", "PostgreSQL", "Docker", "JWT", 
  "OAuth 2.0", "aiogram", "React", "HTML5", "CSS3", 
  "SASS", "TailwindCSS", "JavaScript", "Next.js", 
  "Redux", "TypeScript", "Ant Design", "REST API", 
  "GitHub/GitLab", "TanStack Query"
];

// Split skills into two rows
const row1 = allSkills.slice(0, 10);
const row2 = allSkills.slice(10, 20);

// Duplicate for seamless loop
const repeatedRow1 = [...row1, ...row1, ...row1];
const repeatedRow2 = [...row2, ...row2, ...row2];

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto mb-16 px-6">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-8">
        {/* Row 1 - Moves left */}
        <div className="flex w-full overflow-hidden relative">
          {/* Gradient fade borders */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 w-max shrink-0 px-4"
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            {repeatedRow1.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="glass px-6 py-4 rounded-xl border border-white/5 hover:border-primary/50 transition-colors shadow-lg text-white font-medium whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moves right */}
        <div className="flex w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 w-max shrink-0 px-4"
            animate={{ x: ["-33.333333%", "0%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {repeatedRow2.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="glass px-6 py-4 rounded-xl border border-white/5 hover:border-accent/50 transition-colors shadow-lg text-white font-medium whitespace-nowrap"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
