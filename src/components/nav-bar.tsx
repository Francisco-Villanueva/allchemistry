import { useEffect, useState } from "react";

export function Navbar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      setShowLogo(window.scrollY > screenHeight);
    };

    window.addEventListener("scroll", handleScroll);
    // Verifica el estado inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`h-[10vh] w-full top-0 text-white flex justify-center items-center px-4 fixed z-4  ${
        showLogo ? "opacity-100 backdrop-blur-xs" : "opacity-0"
      } `}
    >
      <div className="flex justify-between items-center container w-full h-full py-2">
        <img
          src={"/nav-bar.png"}
          alt="allchemistry-logo"
          className={`h-full aspect-square   object-cover transition-all duration-300  ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        />

        <ul
          className={`flex  space-x-4 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        >
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#products" className="hover:underline">
              Servicios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
