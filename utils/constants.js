export const API_URL = process.env.NEXT_PUBLIC_URL_OFICIO_BACKEND || '/api/applications';

export const CONTACTOS = {
  RESPONSABLE: {
    NOMBRE: process.env.NEXT_PUBLIC_RESPONSABLE_NOMBRE || "Ing. Mario Ibarra",
    EMAIL: process.env.NEXT_PUBLIC_RESPONSABLE_EMAIL || "mibarra@uagraria.edu.ec"
  },
  SECRETARIA: {
    NOMBRE: process.env.NEXT_PUBLIC_SECRETARIA_NOMBRE || "Secretaría de Decanato"
  },
  DEPARTAMENTO: {
    NOMBRE: process.env.NEXT_PUBLIC_DEPARTAMENTO_ENCARGADO || "Ing. Johanna Ramos"
  }
};

