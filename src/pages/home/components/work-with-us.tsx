import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";

export function WorkWithUs() {
  return (
    <section
      id="trabaja-con-nosotros"
      className="w-full h-full flex flex-col items-center justify-center gap-10"
    >
      <section className="w-full text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-blue-200 mx-auto">
          <BriefcaseBusiness className="size-4" />
          <span>Oportunidades laborales</span>
        </div>
        <h2 className="text-5xl max-md:text-3xl uppercase font-anton">
          ¿Querés formar parte de nuestro equipo?
        </h2>
        <p className="text-gray-400 max-md:text-sm leading-relaxed">
          Completá el formulario y adjuntá tu currículum. Nuestro equipo de
          recursos humanos revisará tu postulación y se pondrá en contacto con
          vos si surge una oportunidad.
        </p>
      </section>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 h-14 px-10 text-base gap-3 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300">
            <BriefcaseBusiness className="size-5" />
            Completá el formulario
            <ArrowRight className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <section className="space-y-4 flex-1">
            <h2 className="flex items-center gap-2 text-xl text-gray-700 font-medium mx-8">
              <BriefcaseBusiness className="size-5" />
              Trabaja con nosotros
            </h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScYd_bsCmnfZBqzTsyRJKR1MJZNFDroCsktXmnaPKUfJaS21A/viewform?embedded=true"
              className="w-full h-full"
            >
              Cargando...
            </iframe>
          </section>
        </SheetContent>
      </Sheet>
    </section>
  );
}
