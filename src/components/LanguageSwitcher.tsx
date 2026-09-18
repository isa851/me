"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      // Very simple replacement logic for the basic path
      const currentPath = pathname;
      const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
      
      router.replace(newPath.startsWith(`/${newLocale}`) ? newPath : `/${newLocale}${currentPath}`);
    });
  };

  return (
    <div className="flex gap-2">
      {["ru", "en", "ky"].map((l) => (
        <button
          key={l}
          onClick={() => handleLanguageChange(l)}
          disabled={isPending}
          className={`px-2 py-1 text-xs md:text-sm font-medium rounded transition-colors ${
            locale === l 
              ? "bg-primary text-white" 
              : "bg-surface text-text-muted hover:text-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
