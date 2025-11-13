export interface DescriptionEntry {
    title: string
    description?: string
}

export interface SocialLink {
    type: "Github"|"Linkedin"
    url: string
}

export interface Language {
    level: "Nativo"|"Native"|"Conversational"|"Conversacional"|"Básico"
    name: string
}

export type ExperienceState = "Activo"|"Titulado"|"Egresado"|null

export type LenguageTag = "HTML"|"JavaScript"|"TypeScript"|"C++"|"Python"|"VB.NET"|"SQL Server"|"Oracle"|"MySQL"|"PHP"
export type ToolTag = "Node.js"|"Express"|"React"|"Angular"|"Flutter"|"Svelte"|"API REST"|"Firebase"|"Git"|"Power BI"|"Docker"|
                        "Laravel"|"Nuxt"|"TailwindCSS"
export type CategoryTag = "Web"|"Server"|"FrontEnd"|"BackEnd"|"Scraping"|"Data"|"Desarrollo"|"Proyecto"|
                            "Documentación"|"Análisis de Datos"|"Habilidad Dura"|"Habilidad Blanda"
export type OtherTag = "Comunicación"|"Ejecución"|"Organización"|"Aprendizaje"|"Ofimática"|"Edición de imágen"|"Other"

export type Tag = LenguageTag|ToolTag|CategoryTag|OtherTag


export interface TagData {
    tags: Tag[]
    data: string
}

export interface ActiveYears {
    startYear: number
    endYear: number | "Presente" | "Present"
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
    skill: TagData[]
    job: JobData[]
    education: ExperienceData[]
    social: SocialLink[]
    lenguage: Language[]
    other: TagData[]
}

export interface SkillTitles
{
    main: string
    hard: string
    soft: string
}

export interface OtherTitles
{
    language: string
    other: string
}

export interface Titles {
    education: string
    job: string
    skill: SkillTitles
    other: OtherTitles
    web: string
}

export interface FilterList {
    white: Tag[]
    black: Tag[]
}

export interface LocalizationData {
    personal: PersonalData
    titles: Titles
}
