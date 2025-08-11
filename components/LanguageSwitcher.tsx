"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "@/utils/i18n/index";

type LanguageOption = {
  code: "en" | "fr" | "ch" | "pr" | "ar";
  label: string;
};

const languageOptions: LanguageOption[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "ch", label: "Chinese" },
  { code: "pr", label: "Portugese" },
  { code: "ar", label: "Arabic" },
];

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(
    i18n.language || "en"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = window.localStorage.getItem("lang");
    const initial = saved || i18n.language || "en";
    if (initial !== i18n.language) {
      i18n.changeLanguage(initial);
    }
    setCurrentLanguage(initial);
  }, [i18n]);

  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    await i18n.changeLanguage(newLang);
    setCurrentLanguage(newLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", newLang);
    }
  };

  return (
    <select
      aria-label="Select language"
      value={currentLanguage}
      onChange={handleChange}
      className={
        className ||
        "px-3 py-2 rounded-md bg-white/90 text-gray-800 border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#694BF1]"
      }
    >
      {languageOptions.map((option) => (
        <option key={option.code} value={option.code}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
