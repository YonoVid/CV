import type { FilterList, PersonalData, Tag } from "../types/generic";
import { localizationEN } from "./en";
import { localizationES } from "./es";

export const defaultFilter: FilterList = {
    white: [
            "Web", "TypeScript", "API REST",
            "SQL Server", "Git", "Ofimática",
            "Habilidad Dura", "Habilidad Blanda",
            "Análisis de Datos","Docker"
        ],
    black: ["HTML", "Laravel", "Power BI", "Svelte", "Nuxt", "Flutter", "Scraping", "Angular"]
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
