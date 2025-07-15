import { CheckCircle, Rocket, Lightbulb, HandHeart } from "lucide-react";
import { ProductsCarousel } from "./products-carousel";
import Logo from "@/assets/logo.png";
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
    <section
      id="about-us"
      className=" flex flex-col items-center  gap-10  size-full  "
    >
      <p className="font-bold uppercase text-5xl font-anton text-center">
        Nuesta Historia
      </p>
      <section className="flex gap-8  w-full">
        <div className="w-1/2 min-w-1/2   flex items-center">
          <img src={Logo} alt="allchemistri" className="w-2/3 mx-auto " />
        </div>
        <div className=" flex flex-col gap-4 justify-around  ">
          <p className="text-lg  text-justify ">
            Somos una empresa familiar con más de 25 años de trayectoria,
            dedicada a ofrecer productos de alta calidad y un servicio
            personalizado. Nacimos en Bahía Blanca en 1997 y desde entonces
            hemos crecido de manera sostenida, incorporando tecnología,
            ampliando nuestra capacidad operativa y consolidando un equipo de
            trabajo comprometido.
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
      </section>
      <section className="container  mx-auto grid grid-cols-3">
        {MVV.map((item) => (
          <article
            className="flex flex-col items-center gap-4 p-4"
            key={item.title}
          >
            <div className="flex flex-col items-center gap-2 p-4">
              <div className="text-blue-400">{item.icon}</div>

              <h2 className="font-bold uppercase text-3xl">{item.title}</h2>
            </div>
            <p className="text- w-2/3 text-center ">{item.description}</p>
          </article>
        ))}
      </section>
      <ProductsCarousel />
    </section>
  );
}
