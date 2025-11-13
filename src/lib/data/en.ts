import type { LocalizationData, PersonalData } from "$lib/types/generic";

export const personalEN: PersonalData = {
    name: "David Esteban Arias Hernández",
    phone: 56965067981,
    email: "david.esarhe@gmail.com",
    region: "Región Metropolitana de Santiago, Chile",
    skill: [
        {tags: ["Habilidad Dura", "Web", "HTML", "JavaScript"], data: "Web development (HTML/JavaScript)"},
        {tags: ["Habilidad Dura", "Web", "React", "TypeScript"], data: "Experience with web and mobile development frameworks (React/React Native)"},
        {tags: ["Habilidad Dura", "Web", "Flutter", "TypeScript"], data: "Experience with multi-platform frameworks (Flutter)"},
        {tags: ["Habilidad Dura", "Web", "Svelte", "TypeScript"], data: "Web application development (Svelte/JavaScript)"},
        {tags: ["Habilidad Dura", "Web", "Nuxt", "TypeScript"], data: "Web progresive framework development (Nuxt)"},
        {tags: ["Habilidad Dura", "BackEnd", "API REST"], data: "Design of API REST (Node.js/Express)"},
        {tags: ["Habilidad Dura", "BackEnd", "SQL Server"], data: "Database management and automatization (SQL Server)"},
        {tags: ["Habilidad Dura", "BackEnd", "Firebase"], data: "Non-relational databases (Firebase)"},
        {tags: ["Habilidad Dura", "Desarrollo", "Docker"], data: "Application containerization (Docker)"},
        {tags: ["Habilidad Dura", "Proyecto", "Documentación"], data: "Documentation and creation of mantainable code (SOLID)"},
        {tags: ["Habilidad Dura", "Desarrollo", "Proyecto", "Git"], data: "Version control (Git)"},
        {tags: ["Habilidad Blanda", "Aprendizaje"], data: "Adaptability and problem solving (Finding the right technology )"},
        {tags: ["Habilidad Blanda", "Ejecución"], data: "Resilience and flexibility (Adapting to chaging requirements)."},
        {tags: ["Habilidad Blanda", "Organización"], data: "Time management and responsibility (Meeting realistic deadlines)"},
        {tags: ["Habilidad Blanda", "Comunicación"], data: "Effective team communication"}
    ],
    job: [
        {
            institution: "Orsan Cobranzas",
            role: { title: "Full Stack developer Junior"},
            state: "Activo",
            activities: [
                {   
                    tags: ["Web", "Desarrollo", "FrontEnd", "VB.NET", "JavaScript"], 
                    data: "Full-stack design and development of web applications for better usability and access (JavaScript)"
                },
                {   
                    tags: ["Web", "Desarrollo", "FrontEnd", "TailwindCSS", "JavaScript"], 
                    data: "Design and implementation of productivity Web tools, reducing lookup times over 20% (JavaScript)"
                },
                {   
                    tags: ["Desarrollo", "BackEnd", "Scraping", "JavaScript", "TypeScript"], 
                    data: "Configuration of scraping bot for external web pages, increasing task efficiency over 50% and allowing parallelization (Node/Typescript)"
                },
                {
                    tags: ["BackEnd", "Server", "Node.js", "TypeScript", "Express", "API REST"], 
                    data: "Development of API REST as a unified interface to access business functionalities (Node/Typescript)"
                },
                {
                    tags: ["Data", "BackEnd", "SQL Server"],
                    data: "Creation and modification of procedures for data processing and analysis, reducing task execution times up to 80% (SQL Server)"
                },
                {
                    tags: ["Data", "Análisis de Datos", "SQL Server", "Power BI"],
                    data: "Design of reports with key process indicators, allowing access to business insight (Power BI)"
                }
            ],
            activeTime: { startYear: 2024, endYear: "Present" }
        }
    ],
    education: [
        {
            institution: "INACAP Technological University",
            role: { title: "Bachelor's in Information Technology"},
            state: null,
            activeTime: { startYear: 2020, endYear: 2023 }
        }
    ],
    social: [
        {type:"Github", url:"https://github.com/YonoVid"},
        {type:"Linkedin", url:"https://www.linkedin.com/in/david-esteban-arias-hernández-0738a5245"}
    ],
    lenguage: [
        {level: "Native", name: "Spanish"},
        {level: "Conversational", name: "English"}
    ],
    other: [
        {tags: ["Proyecto"], data: "Version control (Git/Github)"},
        {tags: ["Ofimática"], data: "Office software (Microsoft Office)"},
        {tags: ["Análisis de Datos"], data: "Data analysis (Power BI)"},
        {tags: ["Edición de imágen"], data: "Basic photo editing"}
    ]
}

export const localizationEN: LocalizationData = {
    personal: personalEN,
    titles: {
        education: "Education", 
        skill: {main: "Profesional skills", hard: "Hard skills", soft: "Soft skills"},
        job: "Experience",
        other: {
            language: "Languages",
            other: "Other skills",
        },
        web: "Web Page"
    }
}