import { atom } from "jotai";
import en from "./en";  // Import default export
import ar from "./ar";  // Import default export
import fr from "./fr";  // Import default export

export const languageAtom = atom("en"); // Default language is English

export const translationsAtom = atom((get) => {
  const language = get(languageAtom);

  if (language === "ar") return ar;
  if (language === "fr") return fr;
  return en; // Default to English if no match
});
