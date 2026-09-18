import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Isa | Frontend Developer & Team Lead",
  description: "Portfolio of Isa, a Frontend Developer and Team Lead specializing in React, Next.js, and modern web architectures.",
  keywords: ["Frontend Developer", "Team Lead", "React", "Next.js", "Portfolio", "Isa", "TypeScript", "JavaScript"],
  authors: [{ name: "Isa" }],
  creator: "Isa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isa-portfolio.com",
    title: "Isa | Frontend Developer",
    description: "Frontend Developer crafting premium digital experiences. Team Lead with a passion for beautiful UI and clean code.",
    siteName: "Isa Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Isa - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isa | Frontend Developer",
    description: "Frontend Developer and Team Lead specializing in React, Next.js.",
    images: ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&h=630&auto=format&fit=crop"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
