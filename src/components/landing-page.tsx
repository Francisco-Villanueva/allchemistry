import {
  ArrowRight,
  BadgeCheck,
  HandHelping,
  Handshake,
  ListOrdered,
  Star,
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
    <div className="   w-full h-full flex flex-row-reverse max-md:flex-col   justify-center  items-center     container mx-auto ">
      <section className=" text-white flex justify-center items-center w-1/2 min-w-1/2    max-md:h-1/2 max-md:w-[90%] ">
        <img
          src={"/logo.png"}
          alt="allchemistry-logo"
          className="w-full object-cover  "
        />
      </section>

      <section className=" text-white    flex flex-col items-start justify-center gap-10  max-md:text-center    w-1/2  max-md:w-[90%]">
        <div className="bg-blue-600/35 text-gray-200  text-sm py-1 px-4 rounded-2xl max-md:hidden flex items-center gap-2">
          <Star className="size-3" fill="white" /> Líder en Agua Destilada
        </div>
        <p className="text-6xl max-md:text-2xl font-bold ">
          Agua destilada con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
            ciencia
          </span>
          , respaldada con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
            trayectoria
          </span>
        </p>
        <p className="text-gray-300 text-xl max-md:text-sm">
          Producción, envasado y venta de agua destilada , bidestilada y
          tridestilada con repartos en Bahía Blanca y la zona.
        </p>
        <section className="text-gray-100  flex justify-around gap-2 w-full">
          {listItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col  items-center gap-2 "
            >
              <item.icon className="md:size-12 text-blue-300" />
              <p className="max-md:text-xs">{item.label}</p>
            </div>
          ))}
        </section>

        <section>
          <a href="#products">
            <Button className=" bg-gradient-to-r from-blue-500 to-blue-700 h-12">
              Ver Productos
              <ArrowRight />
            </Button>
          </a>
        </section>
      </section>
    </div>
  );
}
