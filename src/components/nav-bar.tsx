import Logo from "../assets/logo.png";
export function Navbar() {
  return (
    <nav className=" h-[8vh]  w-full top-0   text-white  flex justify-center    fixed z-4">
      <div className="flex justify-between items-center container   w-full">
        <img src={Logo} alt="allchemistry-logo" className="w-32 object-cover" />
        <ul className="flex space-x-4">
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
