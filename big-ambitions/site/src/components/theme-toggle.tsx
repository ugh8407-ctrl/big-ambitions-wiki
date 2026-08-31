"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/locales";

const labels = {
  en: { light: "Use light theme", dark: "Use dark theme" },
  de: { light: "Helles Design verwenden", dark: "Dunkles Design verwenden" },
  fr: { light: "Utiliser le thème clair", dark: "Utiliser le thème sombre" },
} as const;

export function ThemeToggle({ locale }: { locale: Locale }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("ba-theme");
    const useDark = stored !== "light";
    setDark(useDark);
    document.documentElement.dataset.theme = useDark ? "dark" : "light";
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("ba-theme", next ? "dark" : "light");
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={dark ? labels[locale].light : labels[locale].dark}>{dark ? "☀" : "☾"}</button>;
}
