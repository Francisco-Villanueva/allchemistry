export function Footer() {
  return (
    <footer className="h-[10vh] bg-gray-900  flex items-center justify-between px-8">
      <div className="text-lg font-bold">
        {" "}
        <h1 className="font-bold uppercase text-lg">AllChemistry</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:underline">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Todos los derechos reservados.
      </div>
    </footer>
  );
}
