import type { FilterList, PersonalData, Tag } from "../types/generic";
import { localizationEN } from "./en";
import { localizationES } from "./es";

export const defaultFilter: FilterList = {
    white: [
            "Web", "TypeScript", "API REST",
            "SQL Server", "Git", "Ofimática",
            "Habilidad Dura", "Habilidad Blanda",
            "Docker"
        ],
    black: ["HTML", "Svelte", "Power BI"]
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
