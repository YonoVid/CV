import type { PersonalData } from "../types/generic";

export const personal: PersonalData = {
    name: "David Esteban Arias Hernández",
    phone: 56965067981,
    email: "david.esarhe@gmail.com",
    region: "Región Metropolitana de Santiago, Chile",
    experience: [
        {
            institution: "Orsan Cobranzas",
            role: {
                title: "Desarrollador Junior", 
                description: "Diseño y creación de soluciones web, considerando creación de REST API, gestión de bases de datos y análisis de datos"
            },
            activeTime: { startYear: 2024, endYear: "Presente" }
        }
    ],
    education: [
        {
            institution: "Universidad Tecnológica Inacap",
            title: "Ingeniería en Informática",
            state: "Titulado",
            activeTime: { startYear: 2020, endYear: 2023 }
        }
    ],
    social: [
        {type:"Github", url:"https://github.com/YonoVid"},
        {type:"Linkedin", url:"https://www.linkedin.com/in/david-esteban-arias-hernández-0738a5245"}
    ]
}
