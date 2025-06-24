export interface DescriptionEntry {
    title: string
    description: string
}

export interface SocialLink {
    type: "Github"|"Linkedin"
    url: string
}

export interface ActiveYears {
    startYear: number
    endYear: number | "Presente"
}

export interface ExperienceData {
    institution: string
    role: DescriptionEntry
    activeTime: ActiveYears
}

export interface EducationData {
    institution: string
    title: string
    state: string
    activeTime: ActiveYears
}

export interface PersonalData {
    name: string
    phone: number
    email: string
    region: string
    experience: ExperienceData[]
    education: EducationData[]
    social: SocialLink[]
}
