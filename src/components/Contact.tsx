"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const result = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(result.error || t("errorMessage") || "Произошла ошибка при отправке");
        setTimeout(() => {
          setStatus("idle");
          setErrorMessage(null);
        }, 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(t("errorMessage") || "Произошла ошибка при отправке");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form 
            onSubmit={handleSubmit}
            className="glass p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                  {t("nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={50}
                  pattern="^[^<>{}]*$"
                  title="Имя не должно содержать специальные символы"
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={t("namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-text-muted mb-2">
                  {t("telegramLabel")}
                </label>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  required
                  minLength={3}
                  maxLength={50}
                  className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder={t("telegramPlaceholder")}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                maxLength={1000}
                rows={5}
                className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder={t("messagePlaceholder")}
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full py-4 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && <><FaPaperPlane /> {t("sendButton")}</>}
              {status === "submitting" && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
              {status === "success" && <><FaCheckCircle className="text-green-400" /> {t("successMessage")}</>}
              {status === "error" && <><FaExclamationCircle className="text-red-400" /> {errorMessage || t("errorMessage")}</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
