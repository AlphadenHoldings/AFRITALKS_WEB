"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function GoogleTranslate() {
  const translateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let userLang = "en"; // default

    // Step 1: Detect user's country and map to language
    const detectLanguage = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const countryCode = data.country_code;

        // Simple country → language mapping
        const countryToLang: Record<string, string> = {
          CN: "zh-CN",
          TW: "zh-TW",
          FR: "fr",
          DE: "de",
          ES: "es",
          PT: "pt",
          RU: "ru",
          JP: "ja",
          KR: "ko",
          IT: "it",
          NL: "nl",
          SE: "sv",
          NO: "no",
          DK: "da",
          FI: "fi",
          PL: "pl",
          CZ: "cs",
          HU: "hu",
          RO: "ro",
          BG: "bg",
          HR: "hr",
          SK: "sk",
          SL: "sl",
          EE: "et",
          LV: "lv",
          LT: "lt",
          MT: "mt",
          NG: "en", // Nigeria default English
        };

        if (countryToLang[countryCode]) {
          userLang = countryToLang[countryCode];
        }
      } catch (err) {
        console.error("Failed to detect location:", err);
      }
    };

    const initializeTranslate = () => {
      if (window.google?.translate && translateRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,pt,es,fr,de,zh-CN,zh-TW,ja,ru,ar,hi,ko,it,nl,sv,no,da,fi,pl,cs,hu,ro,bg,hr,sk,sl,et,lv,lt,mt",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          translateRef.current
        );

        // Style and setup the Google Translate dropdown after it loads
        setTimeout(() => {
          styleTranslateButton();

          // Auto-select detected language
          const select =
            document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (select && userLang && select.value !== userLang) {
            select.value = userLang;
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }, 800);
      }
    };

    const styleTranslateButton = () => {
      const select =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        // Style the actual working Google Translate dropdown
        Object.assign(select.style, {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          borderRadius: "25px",
          padding: "10px 16px",
          color: "white",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          outline: "none",
          boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
          transition: "all 0.3s ease",
          minWidth: "140px",
          appearance: "none",
          WebkitAppearance: "none",
          MozAppearance: "none",
        });

        // Add custom dropdown arrow
        select.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 16 16'%3e%3cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3e%3c/svg%3e")`;
        select.style.backgroundRepeat = "no-repeat";
        select.style.backgroundPosition = "right 12px center";
        select.style.backgroundSize = "12px";
        select.style.paddingRight = "35px";

        // Add hover effects
        select.addEventListener("mouseenter", () => {
          select.style.transform = "translateY(-2px)";
          select.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
        });

        select.addEventListener("mouseleave", () => {
          select.style.transform = "translateY(0)";
          select.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
        });

        // Make sure the select is visible and functional
        select.style.opacity = "1";
        select.style.visibility = "visible";
        select.style.pointerEvents = "auto";

        // Hide Google branding but keep the select functional
        const gadget = document.querySelector(".goog-te-gadget");
        if (gadget) {
          const spans = gadget.querySelectorAll("span");
          spans.forEach((span) => {
            if (
              span.textContent?.includes("Powered by") ||
              span.textContent?.includes("Google Translate")
            ) {
              span.style.display = "none";
            }
          });
        }
      }
    };

    const loadGoogleTranslate = async () => {
      await detectLanguage();
      window.googleTranslateElementInit = initializeTranslate;
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    };

    loadGoogleTranslate();

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "1.5rem",
          top: "20px",
          right: "20px",
          zIndex: 9999,
        }}
        ref={translateRef}
      >
        {/* The actual Google Translate dropdown will appear here and be styled */}
      </div>

      <style jsx global>{`
        /* Hide the Google Translate banner and toolbar */
        .goog-te-banner-frame {
          display: none !important;
        }

        .goog-te-ftab {
          display: none !important;
        }

        /* Reset body positioning that Google Translate modifies */
        body {
          top: 0 !important;
          position: static !important;
        }

        /* Make sure the dropdown options are styled properly */
        .goog-te-combo option {
          background: #667eea !important;
          color: white !important;
          padding: 5px !important;
        }

        .goog-te-combo option:hover {
          background: #764ba2 !important;
        }

        /* Hide any extra Google elements */
        .goog-te-gadget-simple {
          border: none !important;
          background: transparent !important;
        }

        .goog-te-gadget {
          font-size: 0 !important;
          line-height: 0 !important;
        }

        .goog-te-gadget .goog-te-combo {
          font-size: 14px !important;
          line-height: normal !important;
        }
      `}</style>
    </>
  );
}
