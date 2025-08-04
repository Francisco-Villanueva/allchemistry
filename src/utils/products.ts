import ImageTridestilada from "../assets/products/tridestilada.jpg";
import ImageBidestilada from "../assets/products/bidestilada.jpg";
import ImageDesmineralizada from "../assets/products/desmineralizada.jpg";
export type Product = {
  title: string;
  description: string;
  image: string;
  uses: string[];
  presentations: string[];
  presentationType: string;
  technical?: Record<string, string>;
};
export const products: Product[] = [
  {
    title: "Agua Destilada",
    description:
      "Agua purificada obtenida por destilación y desionización. Este proceso elimina sales minerales, metales pesados y materia orgánica, logrando un agua de alta pureza.",
    uses: [
      "⁠Análisis Colorimétricos.",
      "⁠Equipos de Análisis Clínicos.",
      "Planchas a vapor y vaporizadores.",
      "Radiadores.",
      "⁠Autoclaves.",
      "⁠Análisis Bromatológicos.",
      "Lavado orgánico de fibra capilar..",
    ],
    presentations: ["1L", "2L", "5L", "10L", "20L", "A GRANEL "],
    presentationType: "PVC/PET",
    image: ImageDesmineralizada,
  },
  {
    title: "Agua Bidestilada",
    description:
      "Agua ultrapura obtenida mediante doble destilación. Elimina eficientemente metales pesados, microorganismos, sales y compuestos orgánicos volátiles, alcanzando una conductividad de entre 1 y 5 µS/cm.",
    uses: [
      "⁠Análisis colorimétricos más precisos.",
      "⁠Equipos de Análisis Clínicos y Químicos.",
      "Autoclaves de uso exigente.",
      "Análisis bromatológicos de mayor exigencia.",
      "Calibración de línea base de instrumentos analíticos.",
      " ⁠Dilución de productos químicos.",
    ],
    presentations: ["5L", "10L", "20L"],
    presentationType: "PVC",
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
    image: ImageBidestilada,
  },
  {
    title: "Agua Tridestilada",
    description:
      "Agua de máxima pureza, obtenida mediante triple destilación o procesos equivalentes (ósmosis inversa + filtrado + luz UV). Elimina prácticamente el 100% de contaminantes, con una conductividad inferior a 1 µS/cm. Certificación internacional ASTM TIPO 2.",
    uses: [
      "⁠Análisis microbiológicos y cuantitativos de laboratorio.",
      "⁠Producción de alimentos sensibles y fórmulas estériles",
      "⁠Análisis cuantitativos de Laboratorio.",
      "Utilización en equipos médicos como CPAP o humidificadores hospitalarios",
      "Equipos nucleares o de alta precisión.",
      "⁠⁠Análisis bromatológicos de máxima exigencia",
      "Diluciones farmacológicas y bioquímicas",
    ],
    image: ImageTridestilada,
    presentations: ["5L", "10L", "20L"],
    presentationType: "PVC",
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
