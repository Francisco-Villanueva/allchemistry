import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqImage from "@/assets/faq.webp";

export function FaqSection() {
  return (
    <section className="flex max-md:flex-col gap-12 container mx-auto">
      <div className="md:w-1/2 flex flex-col text-white gap-6">
        <div className="space-y-3">
          <h2 className="text-4xl max-md:text-2xl font-anton uppercase">
            Preguntas Frecuentes
          </h2>
          <div className="section-divider w-16" />
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Respondemos las dudas más comunes sobre nuestros productos, envíos y
          formas de pago. Si tenés otra consulta, contactanos y te ayudamos.
        </p>
        <img
          src={FaqImage}
          loading="lazy"
          decoding="async"
          className="w-4/5 mx-auto rounded-xl opacity-80"
          alt="FAQ"
        />
      </div>
      <div className="md:w-1/2">
        <AccordionQuestions />
      </div>
    </section>
  );
}

function AccordionQuestions() {
  const items = [
    {
      value: "item-1",
      question: "¿Es segura para el consumo humano?",
      answer:
        "No, el agua destilada, bidestilada y tridestilada no es apta para consumo humano porque, al pasar por procesos de destilación, se eliminan minerales esenciales como calcio, magnesio y sodio que el cuerpo necesita.",
    },
    {
      value: "item-2",
      question:
        "¿Qué cuidados debo tener para almacenar el agua correctamente?",
      answer:
        "Mantené los envases cerrados, en un lugar fresco y alejado de la luz solar directa. Así se conserva la calidad del agua y del envase por más tiempo.",
    },
    {
      value: "item-3",
      question: "¿Los envases son retornables?",
      answer:
        "Sí, fomentamos el retorno de envases para cuidar el medio ambiente. Nosotros nos ocupamos de su debida reutilización.",
    },
    {
      value: "item-4",
      question: "¿Hacen entregas a domicilio?",
      answer:
        "Sí, realizamos envíos a domicilio en Bahía Blanca. Para saber más de nuestra zona de cobertura comunicarse al +54 9 291-535-4645.",
    },
    {
      value: "item-5",
      question: "¿Con cuánta anticipación debo hacer el pedido?",
      answer:
        "Recomendamos realizar el pedido con una anticipación mínima de 24 horas.",
    },
    {
      value: "item-6",
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos efectivo, transferencias, E-chqs y cheques físicos.",
    },
    {
      value: "item-7",
      question: "¿Cuál es el horario de atención o entrega?",
      answer:
        "Nuestro horario de atención es de LUNES A VIERNES: 8:00 a 17:00 hrs y SÁBADOS: 8:00 a 12:00 hrs",
    },
    {
      value: "item-8",
      question: "¿Cómo solicito una cotización personalizada?",
      answer:
        "Podés establecer comunicación directa con nosotros a través de WhatsApp.",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-2"
      defaultValue="item-1"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="glass rounded-lg px-4 border-none"
        >
          <AccordionTrigger className="text-sm text-gray-200 hover:text-white hover:no-underline py-4">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
