import type { FilterList, PersonalData, Tag } from "../types/generic";

export const defaultFilter: FilterList = {
    white: [
            "Web", "TypeScript", "API REST",
            "SQL Server", "Git", "Habilidad Dura",
            "Habilidad Dura", "Habilidad Blanda"
        ],
    black: ["HTML", "Svelte"]
}

export const personal: PersonalData = {
    name: "David Esteban Arias Hernández",
    phone: 56965067981,
    email: "david.esarhe@gmail.com",
    region: "Región Metropolitana de Santiago, Chile",
    skill: [
        {tags: ["Habilidad Dura", "Web", "HTML", "JavaScript"], data: "Creación de interfaz web (HTML/JavaScript)"},
        {tags: ["Habilidad Dura", "Web", "React", "TypeScript"], data: "Creación de aplicación web (React/JavaScript)"},
        {tags: ["Habilidad Dura", "Web", "Svelte", "TypeScript"], data: "Creación de interfaz web (Svelte/JavaScript)"},
        {tags: ["Habilidad Dura", "BackEnd", "API REST"], data: "Desarrollo de API REST (Node)"},
        {tags: ["Habilidad Dura", "BackEnd", "SQL Server"], data: "Gestión de base de datos y Transact-SQL (SQL Server)"},
        {tags: ["Habilidad Dura", "Desarrollo", "Proyecto", "Git"], data: "Control de versiones (Git)"},
        {tags: ["Habilidad Blanda", "Aprendizaje"], data: "Adaptabilidad a solución de problemas (Aprendizaje de tecnología adecuada)"},
        {tags: ["Habilidad Blanda", "Organización"], data: "Manejo de tiempo y responsabilidad (Entregar solicitudes en plazos planteados)"},
        {tags: ["Habilidad Blanda", "Comunicación"], data: "Comunicación efectiva para trabajos en equipo"}
    ],
    job: [
        {
            institution: "Orsan Cobranzas",
            role: { title: "Desarrollador Junior"},
            state: "Activo",
            activities: [
                {   
                    tags: ["Web", "Desarrollo", "FrontEnd", "VB.NET", "JavaScript"], 
                    data: "Diseño y creación de soluciones web internas"
                },
                {   
                    tags: ["Desarrollo", "BackEnd", "JavaScript", "TypeScript"], 
                    data: "Automatización de procesos manuales de obtención de datos desde página web"
                },
                {
                    tags: ["BackEnd", "Server", "Node.js", "TypeScript", "Express", "API REST"], 
                    data: "Desarrollo herramientas para mejorar procesos implementadas como API REST"
                },
                {
                    tags: ["Data", "BackEnd", "SQL Server"],
                    data: "Gestión de bases de datos, generación de procedimientos automatizados y análisis de datos"
                }
            ],
            activeTime: { startYear: 2024, endYear: "Presente" }
        }
    ],
    education: [
        {
            institution: "Universidad Tecnológica Inacap",
            role: { title: "Ingeniería en Informática"},
            state: "Titulado",
            activeTime: { startYear: 2020, endYear: 2023 }
        }
    ],
    social: [
        {type:"Github", url:"https://github.com/YonoVid"},
        {type:"Linkedin", url:"https://www.linkedin.com/in/david-esteban-arias-hernández-0738a5245"}
    ],
    lenguage: [
        {level: "Nativo", name: "Español"},
        {level: "Conversacional", name: "Inglés"}
    ],
    other: [
        {tags: ["Ofimática"], data: "Ofimática"},
        {tags: ["Edición de imágen"], data: "Edición de imágen básica"}
    ]
}
