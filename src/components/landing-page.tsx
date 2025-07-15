import Logo from "@/assets/logo.png";
import { BadgeCheck, HandHelping, Handshake, ListOrdered } from "lucide-react";

const listItems = [
  { icon: ListOrdered, label: "Orden" },
  { icon: HandHelping, label: "Servicio" },
  { icon: Handshake, label: "Compromiso" },
  { icon: BadgeCheck, label: "Calidad" },
];
export function LandingPage() {
  return (
    <div className="   w-full h-full flex max-md:flex-col   justify-center  items-center  gap-4 container mx-auto ">
      <section className=" text-white w-1/2 min-w-1/2  flex justify-center items-center ">
        <img
          src={Logo}
          alt="allchemistry-logo"
          className="w-[30vw] max-md:w-full object-cover  "
        />
      </section>
      <section className=" text-white    flex flex-col max-md:text-center gap-10  max-md:w-[90%]">
        <p className="text-6xl max-md:text-2xl font-bold ">
          Agua destilada con ciencia, respaldada con trayectoria
        </p>
        <p className="text-gray-300 text-xl max-md:text-sm">
          Producción, envasado y venta de agua destilada , bidestilada y
          tridestilada con repartos en Bahía Blanca y la zona.
        </p>
        <section className="text-gray-100  flex justify-around gap-2">
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
      </section>
    </div>
  );
}
