import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

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
    <nav className="h-[8vh] w-full top-0 text-white flex justify-center items-center fixed z-4">
      <div className="flex justify-between items-center container w-full">
        <img
          src={Logo}
          alt="allchemistry-logo"
          className={`w-24 object-cover transition-all duration-300 ${
            showLogo ? "opacity-100" : "opacity-0"
          }`}
        />

        <ul
          className={`flex space-x-4 ${showLogo ? "opacity-100" : "opacity-0"}`}
        >
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              Nosotors
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
