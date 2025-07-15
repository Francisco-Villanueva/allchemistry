import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqImaga from "@/assets/faq.webp";
export function FaqSection() {
  return (
    <section className=" flex  gap-10 container mx-auto ">
      <div className="w-1/2 flex flex-col   text-white gap-8">
        <h2 className="text-3xl font-anton uppercase font-semibold ">
          Preguntas Frecuentes
        </h2>
        <p className="text-gray-400">
          Respondemos las dudas más comunes sobre nuestros productos, envíos y
          formas de pago. Si tenés otra consulta, contactanos y te ayudamos.
        </p>
        <img src={FaqImaga} className="w-5/6 mx-auto" />
      </div>
      <div className="w-1/2">
        <AccordionQuestions />
      </div>
    </section>
  );
}

function AccordionQuestions() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Es segura para el consumo humano?</AccordionTrigger>
        <AccordionContent>
          No, el agua destilada, bidestilada y tridestilada no es apta para
          consumo humano porque, al pasar por procesos de destilación, se
          eliminan minerales esenciales como calcio, magnesio y sodio que el
          cuerpo necesita.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          ¿Qué cuidados debo tener para almacenar el agua correctamente?
        </AccordionTrigger>
        <AccordionContent>
          Mantené los envases cerrados, en un lugar fresco y alejado de la luz
          solar directa. Así se conserva la calidad del agua y del envase por
          más tiempo.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>¿Los envases son retornables?</AccordionTrigger>
        <AccordionContent>
          Sí, fomentamos el retorno de envases para cuidar el medio ambiente.
          Nosotros nos ocupamos de su debida reutilización.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>¿Hacen entregas a domicilio?</AccordionTrigger>
        <AccordionContent>
          Sí, realizamos envíos a domicilio en Bahía Blanca. Para saber más de
          nuestra zona de cobertura comunicarse al +54 9 291-535-4645.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>
          ¿Con cuánta anticipación debo hacer el pedido?
        </AccordionTrigger>
        <AccordionContent>
          Recomendamos realizar el pedido con una anticipación mínima de 24
          horas.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>¿Qué formas de pago aceptan?</AccordionTrigger>
        <AccordionContent>
          Aceptamos efectivo y transferencias bancarias o de billeteras
          virtuales.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>
          ¿Cuál es el horario de atención o entrega?
        </AccordionTrigger>
        <AccordionContent>
          Atendemos de lunes a viernes de 08:00 a 17:00 hs, y los sábados de
          08:00 a 17:00 hs. Las entregas también se coordinan dentro de ese
          rango horario.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>
          ¿Cómo solicito una cotización personalizada?
        </AccordionTrigger>
        <AccordionContent>
          Podés establecer comunicación directa con nosotros a través de
          Whatsapp.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
