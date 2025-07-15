import { CheckCircle, Rocket, Lightbulb, HandHeart } from "lucide-react";
import { ProductsCarousel } from "./products-carousel";

export function AboutUs() {
  const checks = [
    "La excelencia.",
    "La cercanía con nuestros clientes.",
    "La mejora continua.",
  ];
  const MVV = [
    {
      icon: <Rocket className="size-16" />,
      title: "Misión",
      description:
        "Nos especializamos en desarrollar productos de alta calidad que cumplen con los más altos estándares del mercado. Brindamos un servicio ágil, confiable y adaptado a las necesidades de cada cliente.",
    },
    {
      icon: <Lightbulb className="size-16" />,
      title: "Visión",
      description:
        "Ser una empresa reconocida en Bahía Blanca y la región por nuestra seriedad, compromiso y la calidad constante de nuestros productos. Aspiramos a construir relaciones duraderas, basadas en el cumplimiento, la agilidad y una atención cercana",
    },
    {
      icon: <HandHeart className="size-16" />,
      title: "Valores",
      description:
        "Somos una empresa que se destaca por su dedicación y compromiso, y nuestra forma de trabajar está basada en principios sólidos que impulsan el crecimiento continuo:",
    },
  ];
  return (
    <section id="about-us" className=" flex flex-col gap-10  size-full  ">
      <div className="flex flex-col items-center gap-8 container  mx-auto  p-4">
        <p className="font-bold uppercase text-5xl font-anton">
          Nuesta Historia
        </p>
        <p className="w-2/3 text-lg text-center ">
          Somos una empresa familiar con más de 25 años de trayectoria, dedicada
          a ofrecer productos de alta calidad y un servicio personalizado.
          Nacimos en Bahía Blanca en 1997 y desde entonces hemos crecido de
          manera sostenida, incorporando tecnología, ampliando nuestra capacidad
          operativa y consolidando un equipo de trabajo comprometido.
          <br />
          <br />
        </p>
        <div className="flex flex-col gap-2 text-lg">
          Hoy, seguimos guiados por los valores que nos vieron nacer:
          {checks.map((item) => (
            <div className="flex items-center gap-2 ml-4 " key={item}>
              <CheckCircle />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <section className="container  mx-auto grid grid-cols-3">
        {MVV.map((item) => (
          <article
            className="flex flex-col items-center gap-4 p-4"
            key={item.title}
          >
            <div className="flex flex-col items-center gap-2 p-4">
              {item.icon}
              <h2 className="font-bold uppercase text-3xl">{item.title}</h2>
            </div>
            <p className="text-sm w-2/3 ">{item.description}</p>
          </article>
        ))}
      </section>
      <ProductsCarousel />
    </section>
  );
}
