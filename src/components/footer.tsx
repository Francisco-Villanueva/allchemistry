import { ContactButton } from "./ContactButton";
import { IntagramIcon } from "./icons/IntagramIcon";
import { FacebookIcon } from "./icons/FacebookIcon";
import EmailIcon from "./icons/EmailIcon";
import { MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/[0.06]">
      <div className="container mx-auto px-6 py-12 max-md:py-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
          {/* Brand + address */}
          <div className="space-y-4">
            <h1 className="font-anton uppercase text-xl text-white tracking-wider">
              AllChemistry
            </h1>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="size-3.5 text-gray-500 flex-shrink-0" />
                <p>Pedro Pico 445 - Bahía Blanca</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="size-3.5 text-gray-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Lunes a Viernes: 08:00 - 17:00</p>
                  <p>Sábados: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
              Navegación
            </p>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Acerca de
            </a>
            <a
              href="#products"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Productos
            </a>
            <a
              href="#faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Preguntas Frecuentes
            </a>
            <a
              href="#work-with-us"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Trabajá con nosotros
            </a>
          </nav>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Contacto
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:allchemistrybb@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <EmailIcon />
              </a>
              <ContactButton phoneNumber="+5492915354645" />
              <a
                href="https://www.instagram.com/allchemistry.bb"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IntagramIcon />
              </a>
              <a
                href="https://www.facebook.com/people/Allchemistry/100054537636260/#"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="section-divider mb-6" />
        <p className="text-xs text-gray-600 text-center">
          &copy; {new Date().getFullYear()} AllChemistry. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
