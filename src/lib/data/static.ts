import type { FilterList, PersonalData, Tag } from "../types/generic";
import { localizationEN } from "./en";
import { localizationES } from "./es";

export const defaultFilter: FilterList = {
    white: [
            "Web", "TypeScript", "API REST",
            "SQL Server", "Ofimática",
            "Habilidad Dura", "Habilidad Blanda",
            "Proyecto",
            "Análisis de Datos","Docker"
        ],
    black: ["Scraping", "Git", "HTML", "Laravel", "React", "Power BI", "Svelte", "Nuxt", "Flutter"]
}

export const getLocalization = (lang: string) =>{
    console.log("GET LOCATIZATION FOR::", lang.split("-")[0])
    switch(lang.split("-")[0])
    {
        case "en":
            return localizationEN
        default:
            return localizationES
    }
} 
