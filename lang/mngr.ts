import { useEffect, useState } from "react";
import { z } from "zod";

import create from "zustand";

const useLangStore = create(set => ({
  lang: "swe",
  setSwedish: () => set(() => ({ lang: "swe" })),
  setEnglish: () => set(() => ({ lang: "eng" })),
  setLang: (lang: "swe" | "eng") => set(() => ({ lang }))
}));

const LANGS = {
  swe: {
    greeting: "Hej",
    iAm: "Jag är",
    heroTitleInfo: "och är student vid gymnasie",
    contactMe: "Kontakta mig",
    aboutMe: "Om mig",
    changeLanguage: "To English",
    whoAmI: "Vem är jag",
    interests: "Intressen",
    projects: "Projekt",
    email: "Email",
    one: "En",
    yearOld: `${Math.abs(
      new Date(Date.now() - new Date("07/24/2006").getTime()).getUTCFullYear() -
        1970
    )} år gammal`
  },
  eng: {
    greeting: "Hi",
    iAm: "I am",
    heroTitleInfo: "I'm a student at a swedish 'gymnasie'",
    contactMe: "Contact me",
    aboutMe: "About Me",
    changeLanguage: "Till Svenska",
    whoAmI: "Who am i",
    interests: "Interests",
    projects: "Projects",
    email: "Email",
    one: "A",
    yearOld: `${Math.abs(
      new Date(Date.now() - new Date("07/24/2006").getTime()).getUTCFullYear() -
        1970
    )} year old`
  }
};

export function useLang(): [
  typeof LANGS["swe" | "eng"],
  (lang: "swe" | "eng") => void,
  string
] {
  const [isClient, setIsClient] = useState(false);
  const lang = useLangStore((state: any) => state.lang);
  const setLang = useLangStore((state: any) => state.setLang);

  const windowIsUnd = typeof window !== undefined;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      const wrongLang = localStorage.getItem("lang");
      if (wrongLang !== "eng" && wrongLang !== "swe") {
        localStorage.setItem("lang", "swe");
      }
      setLang(localStorage.getItem("lang"));
    }
  }, [windowIsUnd, lang, setLang]);
  if (typeof window !== "undefined" && isClient) {
    const lang: "swe" | "eng" =
      (localStorage.getItem("lang") as "eng" | "swe") || "swe";
    return [
      LANGS[lang],
      (lang: "swe" | "eng") => {
        setLang(lang);
        localStorage.setItem("lang", lang);
      },
      lang
    ];
  }
  return [
    LANGS["swe"],
    (lang: "swe" | "eng") => {
      setLang(lang);
      localStorage.setItem("lang", lang);
    },
    lang
  ];
}
