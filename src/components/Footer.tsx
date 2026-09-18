import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer id="contact" className="py-12 border-t border-white/10 bg-surface/30">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/isa851"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/isa-undefined-a1b481363/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:isa904363@gmail.com"
            className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="/resume_Islam_Abdikalilov.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-primary hover:border-primary transition-all"
            aria-label="Resume"
          >
            <FaFileDownload size={20} />
          </a>
        </div>
        
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Isa. {t("rights")}
        </p>
      </div>
    </footer>
  );
}
