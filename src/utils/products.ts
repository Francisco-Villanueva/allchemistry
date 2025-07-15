export type Product = {
  title: string;
  description: string;
  uses: string[];
  presentations: string[];
  technical?: Record<string, string>;
};
export const products: Product[] = [
  {
    title: "Agua Desionizada",
    description:
      "Agua purificada obtenida por destilación y desionización. Este proceso elimina sales minerales, metales pesados y materia orgánica, logrando un agua de alta pureza.",
    uses: [
      "Laboratorios",
      "Industria cosmética y farmacéutica",
      "Equipos médicos y electrodomésticos",
      "Baterías y radiadores",
    ],
    presentations: ["1L", "2L", "5L", "10L", "20L"],
  },
  {
    title: "Agua Bidestilada",
    description:
      "Agua ultrapura obtenida mediante doble destilación. Elimina eficientemente metales pesados, microorganismos, sales y compuestos orgánicos volátiles, alcanzando una conductividad de entre 1 y 5 µS/cm.",
    uses: [
      "Procesos industriales con requerimientos de alta pureza",
      "Preparación de reactivos sensibles",
    ],
    presentations: ["1L", "2L", "5L", "10L", "20L"],
    technical: {
      pH: "7",
      Turbidez: "< 1 NTU",
      "Sólidos totales": "33 PPM",
      Cloruros: "3 PPM",
      Sulfatos: "2 PPM",
      Sulfuros: "< 0.03 PPM",
      Hierro: "< 0.05 PPM",
      Manganeso: "< 0.01 PPM",
      "Nitrógeno amoniacal": "< 0.1 PPM",
      Dureza: "< 2 PPM",
    },
  },
  {
    title: "Agua Tridestilada",
    description:
      "Agua de máxima pureza, obtenida mediante triple destilación o procesos equivalentes (ósmosis inversa + filtrado + luz UV). Elimina prácticamente el 100% de contaminantes, con una conductividad inferior a 1 µS/cm. Certificación internacional ASTM TIPO 2.",
    uses: [
      "Equipos médicos sofisticados (CPAP, autoclaves)",
      "Industria farmacéutica y biotecnológica",
      "Aplicaciones donde se requiere agua sin trazas de impurezas.",
    ],
    presentations: ["1L", "2L", "5L", "10L", "20L"],
    technical: {
      "Conductividad Eléctrica": "< 1.0 µS/cm",
      "Bacterias aerobias mesófilas": "30 UFC/mL",
      pH: "5",
      "Cloro residual total": "< 0.1 mg/L",
      "Cromo ICP-OES": "< 0.01 mg/L",
      "Níquel ICP-OES": "< 0.01 mg/L",
      "Zinc ICP-OES": "< 0.01 mg/L",
      "Cadmio ICP-OES": "< 0.005 mg/L",
      "Cobre ICP-OES": "< 0.01 mg/L",
      "Plomo ICP-OES": "< 0.01 mg/L",
      "Metales pesados totales": "< 1 mg/L",
    },
  },
];
