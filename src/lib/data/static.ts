import type { FilterList, PersonalData, Tag } from "../types/generic";

export const defaultFilter: FilterList = {
    white: [
            "Web", "TypeScript", "API REST",
            "SQL Server", "Git", "Ofimática",
            "Habilidad Dura", "Habilidad Blanda",
            "Docker"
        ],
    black: ["HTML", "Svelte", "Power BI"]
}

export const personal: PersonalData = {
    name: "David Esteban Arias Hernández",
    phone: 56965067981,
    email: "david.esarhe@gmail.com",
    region: "Región Metropolitana de Santiago, Chile",
    skill: [
        {tags: ["Habilidad Dura", "Web", "HTML", "JavaScript"], data: "Desarrollo web (HTML/JavaScript)"},
        {tags: ["Habilidad Dura", "Web", "React", "TypeScript"], data: "Experiencia con frameworks web y móvil (React/React Native)"},
        {tags: ["Habilidad Dura", "Web", "Svelte", "TypeScript"], data: "Creación de aplicación web (Svelte/JavaScript)"},
        {tags: ["Habilidad Dura", "BackEnd", "API REST"], data: "Desarrollo de API REST (Node.js)"},
        {tags: ["Habilidad Dura", "BackEnd", "SQL Server"], data: "Gestión de base de datos y Transact-SQL (SQL Server)"},
        {tags: ["Habilidad Dura", "BackEnd", "Firebase"], data: "Uso de base de datos no relacional (Firebase)"},
        {tags: ["Habilidad Dura", "Desarrollo", "Docker"], data: "Contenerización de aplicación (Docker)"},
        {tags: ["Habilidad Dura", "Desarrollo", "Proyecto", "Git"], data: "Control de versiones (Git)"},
        {tags: ["Habilidad Blanda", "Aprendizaje"], data: "Adaptabilidad a solución de problemas (Aprendizaje de tecnología adecuada)"},
        {tags: ["Habilidad Blanda", "Organización"], data: "Manejo de tiempo y responsabilidad (Entregar solicitudes en plazos planteados)"},
        {tags: ["Habilidad Blanda", "Comunicación"], data: "Comunicación efectiva para trabajos en equipo"}
    ],
    job: [
        {
            institution: "Orsan Cobranzas",
            role: { title: "Desarrollador Full Stack Júnior"},
            state: "Activo",
            activities: [
                {   
                    tags: ["Web", "Desarrollo", "FrontEnd", "VB.NET", "JavaScript"], 
                    data: "Desarrollo de soluciones web internas para facilitar usabilidad y accesibiladad de herramientas existentes (JavaScript)"
                },
                {   
                    tags: ["Desarrollo", "BackEnd", "JavaScript", "TypeScript"], 
                    data: "Automatización de procesamiento de información con páginas web externas, para optimizar tiempo de tareas en  más de un 50% y permitir paralelización (Node/Typescript)"
                },
                {
                    tags: ["BackEnd", "Server", "Node.js", "TypeScript", "Express", "API REST"], 
                    data: "Implementación de interfaz unificada para acceder a funcionalidades de servicios internos mediante API REST (Node/Typescript)"
                },
                {
                    tags: ["Data", "BackEnd", "SQL Server"],
                    data: "Creación y modificación de procedimientos para gestión y análisis datos, reduciendo tiempos de ejecución hasta un 80% (SQL Server)"
                },
                {
                    tags: ["Data", "SQL Server", "Power BI"],
                    data: "Diseño de reportería para obtener conocimiento de procesos, facilitando acceso a lo largo de la organización de información relevante  (Power BI)"
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
        {tags: ["Ofimática"], data: "Ofimática (Microsoft Office)"},
        {tags: ["Análisis de Datos"], data: "Análisis de Datos (Power BI)"},
        {tags: ["Edición de imágen"], data: "Edición de imágen básica"}
    ]
}
