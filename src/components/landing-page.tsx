import {
  ArrowRight,
  BadgeCheck,
  HandHelping,
  Handshake,
  ListOrdered,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";

const listItems = [
  { icon: ListOrdered, label: "Orden" },
  { icon: HandHelping, label: "Servicio" },
  { icon: Handshake, label: "Compromiso" },
  { icon: BadgeCheck, label: "Calidad" },
];

export function LandingPage() {
  return (
    <div className="w-full h-full flex flex-row-reverse max-md:flex-col justify-center items-center container mx-auto px-4">
      {/* Logo */}
      <section className="flex justify-center items-center w-1/2 min-w-1/2 max-md:h-[40%] max-md:w-[85%]">
        <img
          src={"/logo.png"}
          alt="allchemistry-logo"
          className="w-full object-cover drop-shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        />
      </section>

      {/* Content */}
      <section className="text-white flex flex-col items-start justify-center gap-8 max-md:items-center max-md:text-center w-1/2 max-md:w-[90%]">
        {/* Badge */}
        <div className="glass rounded-full py-1.5 px-5 flex items-center gap-2 text-sm text-blue-200">
          <Sparkles className="size-3.5" />
          <span>Lider en Agua Destilada</span>
        </div>

        {/* Headline */}
        <p className="text-5xl max-md:text-3xl font-bold leading-[1.1] tracking-tight font-anton">
          Agua destilada con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300">
            ciencia
          </span>
          , respaldada con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300">
            trayectoria
          </span>
        </p>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-md:text-sm leading-relaxed max-w-lg">
          Produccion, envasado y venta de agua destilada, bidestilada y
          tridestilada con repartos en Bahia Blanca y la zona.
        </p>

        {/* Values icons */}
        <section className="flex justify-between gap-6 max-md:gap-4 w-full max-w-md">
          {listItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2.5 group"
            >
              <div className="glass rounded-xl p-3 max-md:p-2 transition-all duration-200 group-hover:bg-white/[0.08]">
                <item.icon className="size-7 max-md:size-5 text-blue-300" />
              </div>
              <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <a href="#products">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 h-12 px-8 text-base shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-all duration-300">
            Ver Productos
            <ArrowRight className="size-4 ml-1" />
          </Button>
        </a>
      </section>
    </div>
  );
}
