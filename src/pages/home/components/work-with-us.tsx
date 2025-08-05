import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BriefcaseBusiness, FileSymlink } from "lucide-react";

export function WorkWithUs() {
  return (
    <section
      id="trabaja-con-nosotros"
      className="w-full  h-full  flex flex-col items-center gap-20  "
    >
      <section className="w-full text-center space-y-2 max-w-3xl mx-auto">
        <h2 className="text-6xl max-md:text-4xl uppercase font-anton">
          ¿Querés formar parte de nuestro equipo?
        </h2>
        <p className="text-gray-400 max-md:text-sm">
          Completá el formulario y adjuntá tu currículum. Nuestro equipo de
          recursos humanos revisará tu postulación y se pondrá en contacto con
          vos si surge una oportunidad.
        </p>
      </section>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="size-[250px] flex flex-col gap-4">
            <FileSymlink className="size-20" />
            <span>Completa el formulario</span>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <section className=" space-y-4 flex-1 ">
            <h2 className="flex items-center gap-2 text-xl text-gray-700 font-medium mx-8">
              <BriefcaseBusiness />
              Trabaja con nosotros
            </h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScYd_bsCmnfZBqzTsyRJKR1MJZNFDroCsktXmnaPKUfJaS21A/viewform?embedded=true"
              className="w-full h-full"
            >
              Cargando…
            </iframe>
          </section>
        </SheetContent>
      </Sheet>
    </section>
  );
}
