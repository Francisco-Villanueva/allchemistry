import { CheckCircle, Rocket, Lightbulb, HandHeart } from "lucide-react";
import { ProductsCarousel } from "./products-carousel";
import Logo from "@/assets/landing.jpg";

export function AboutUs() {
  const checks = [
    "La excelencia.",
    "La cercanía con nuestros clientes.",
    "La mejora continua.",
  ];

  const MVV = [
    {
      icon: <Rocket className="size-10 max-md:size-6" />,
      title: "Misión",
      description:
        "Nos especializamos en desarrollar productos de alta calidad que cumplen con los más altos estándares del mercado. Brindamos un servicio ágil, confiable y adaptado a las necesidades de cada cliente.",
    },
    {
      icon: <Lightbulb className="size-10 max-md:size-6" />,
      title: "Visión",
      description:
        "Ser una empresa reconocida en Bahía Blanca y la región por nuestra seriedad, compromiso y la calidad constante de nuestros productos. Aspiramos a construir relaciones duraderas, basadas en el cumplimiento, la agilidad y una atención cercana.",
    },
    {
      icon: <HandHeart className="size-10 max-md:size-6" />,
      title: "Valores",
      description:
        "Somos una empresa que se destaca por su dedicación y compromiso, y nuestra forma de trabajar está basada en principios sólidos que impulsan el crecimiento continuo.",
    },
  ];

  return (
    <section
      id="about-us"
      className="flex flex-col items-center gap-12 size-full"
    >
      {/* Section title */}
      <div className="text-center space-y-3">
        <p className="font-bold uppercase text-5xl max-md:text-3xl font-anton">
          Nuestra Historia
        </p>
        <div className="section-divider w-24 mx-auto" />
      </div>

      {/* History row */}
      <section className="flex max-md:flex-col max-md:items-center gap-10 w-full max-md:w-[90%]">
        <div className="md:w-1/2 md:min-w-1/2 flex items-center">
          <img
            src={Logo}
            alt="allchemistry"
            loading="lazy"
            decoding="async"
            className="w-full mx-auto object-cover rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center">
          <p className="text-lg max-md:text-sm text-gray-300 leading-relaxed">
            Somos una empresa familiar con más de 25 años de trayectoria,
            dedicada a ofrecer productos de alta calidad y un servicio
            personalizado. Nacimos en Bahía Blanca en 1997 y desde entonces
            hemos crecido de manera sostenida, incorporando tecnología,
            ampliando nuestra capacidad operativa y consolidando un equipo de
            trabajo comprometido.
          </p>
          <div className="flex flex-col gap-3 text-lg max-md:text-sm">
            <p className="text-gray-400">
              Hoy, seguimos guiados por los valores que nos vieron nacer:
            </p>
            {checks.map((item) => (
              <div className="flex items-center gap-3 ml-2" key={item}>
                <CheckCircle className="size-4 max-md:size-3.5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 max-md:text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="container mx-auto grid grid-cols-3 max-md:grid-cols-1 gap-4">
        {MVV.map((item) => (
          <article
            className="glass rounded-xl flex md:flex-col items-center gap-4 p-6 hover-lift"
            key={item.title}
          >
            <div className="flex flex-col items-center gap-3 md:p-2">
              <div className="text-blue-400 p-3 rounded-lg bg-blue-500/10">
                {item.icon}
              </div>
              <h2 className="font-bold uppercase md:text-2xl font-anton">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-400 md:text-center text-sm leading-relaxed">
              {item.description}
            </p>
          </article>
        ))}
      </section>

      {/* Carousel */}
      <ProductsCarousel />
    </section>
  );
}
