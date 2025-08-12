  "use client";

  import { useEffect, useRef } from "react";

  declare global {
    interface Window {
      google: any;
      googleTranslateElementInit: () => void;
    }
  }

  export default function GoogleTranslate() {
    const googleTranslateRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // Get user's browser language
      const getUserLanguage = () => {
        const browserLang = navigator.language.split("-")[0].toLowerCase();
        const supportedLanguages = ["en", "fr", "ar", "pt", "zh-TW", "zh"];
        return supportedLanguages.includes(browserLang) ? browserLang : "en";
      };

      if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        if (googleTranslateRef.current) {
          const detectedLanguage = getUserLanguage();
          new window.google.translate.TranslateElement(
            {
              pageLanguage: detectedLanguage,
              includedLanguages: "en,fr,ar,pt,zh",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: true,
            },
            googleTranslateRef.current
          );
        }
      };

      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }, []);

    return (
      <div
        ref={googleTranslateRef}
        className="h-2 w-[2rem] fixed bottom-4 -right-[7rem] lg:right-0 w-fit transform -translate-x-1/2"
      />
    );
  }
