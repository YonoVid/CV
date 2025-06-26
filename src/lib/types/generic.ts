export interface DescriptionEntry {
    title: string
    description?: string
}

export interface SocialLink {
    type: "Github"|"Linkedin"
    url: string
}

export interface Lenguage {
    level: "Nativo"|"Conversacional"|"Básico"
    name: string
}

export type ExperienceState = "Activo"|"Titulado"|"Egresado"

export type LenguageTag = "HTML"|"JavaScript"|"TypeScript"|"C++"|"Python"|"VB.NET"|"SQL Server"|"Oracle"|"MySQL"
export type ToolTag = "Node.js"|"Express"|"React"|"Svelte"|"API REST"|"Firebase"|"Git"|"Power BI"
export type CategoryTag = "Web"|"Server"|"FrontEnd"|"BackEnd"|"Data"|"Desarrollo"|"Proyecto"|
                            "Análisis de Datos"|"Habilidad Dura"|"Habilidad Blanda" 
export type OtherTag = "Comunicación"|"Organización"|"Aprendizaje"|"Ofimática"|"Edición de imágen"|"Other"

export type Tag = LenguageTag|ToolTag|CategoryTag|OtherTag


export interface TagData {
    tags: Tag[]
    data: string
}

export interface ActiveYears {
    startYear: number
    endYear: number | "Presente"
}

export interface ExperienceData {
    institution: string
    role: DescriptionEntry
    state: ExperienceState
    activeTime: ActiveYears
}

export interface JobData extends ExperienceData {
    activities: TagData[]
}

export interface PersonalData {
    name: string
    phone: number
    email: string
    region: string
    skill?: TagData[]
    job?: JobData[]
    education: ExperienceData[]
    social: SocialLink[]
    lenguage: Lenguage[]
    other?: TagData[]
}

export interface FilterList {
    white: Tag[]
    black: Tag[]
}
