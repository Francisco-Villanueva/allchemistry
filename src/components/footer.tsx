export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 p-10 flex flex-col">
      <h1 className="font-bold uppercase text-lg text-white">AllChemistry</h1>
      <section className="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-4 text-sm">
        <div>
          <p className="mt-2">Pedro Pico 445 - Bahía Blanca</p>
          <p>Horarios:</p>
          <p>Lunes a Viernes: 08:00 AM - 17:00 PM</p>
          <p>Sábados: 08:00 AM - 12:00 PM</p>
        </div>

        <div>
          <h2 className="font-semibold text-white">Contacto</h2>
          <p>
            Mail:{" "}
            <a
              href="mailto:allchemistrybb@gmail.com"
              className="hover:underline"
            >
              allchemistrybb@gmail.com
            </a>
          </p>
          <p>
            Teléfono:{" "}
            <a href="tel:+5492915354645" className="hover:underline">
              +54 9 291-535-4645
            </a>
          </p>
          <p>
            Instagram:{" "}
            <a
              href="https://www.instagram.com/allchemistry.bb"
              target="_blank"
              className="hover:underline"
            >
              allchemistry.bb
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/Allchemistry"
              target="_blank"
              className="hover:underline"
            >
              Allchemistry
            </a>
          </p>
        </div>

        <div className="md:text-right">
          <nav className="flex flex-col gap-1">
            <a href="#about" className="hover:underline">
              Acerca de
            </a>
            <a href="#services" className="hover:underline">
              Servicios
            </a>
            <a href="#contact" className="hover:underline">
              Contacto
            </a>
          </nav>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
}
