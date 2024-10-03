import { en } from "./EN";
import { uz } from "./UZ";
import { tr } from "./TR";
import { LANGUAGE } from "../tools/constans";

export const flagImages = {
    uz: "/flag-uz.svg",
    tr: "/turkey-flag.png",
    en: "/flag-en.svg",
};

export const getLanguage = () => {
    const storedLanguage = localStorage.getItem(LANGUAGE);
    return storedLanguage ? storedLanguage : "uz";
};

export const getText = (word) => {
    const language = getLanguage();
    return language === "uz" ?
        uz[word] :
        language === "en" ?
        en[word] :
        tr[word];
};