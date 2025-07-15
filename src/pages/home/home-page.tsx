import LandingImg from "../../assets/landing.jpg";
import "../../App.css";
import Logo from "../../assets/logo.png";
import { ProductList } from "./components/product-list";
import { Navbar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import { AboutUs } from "./components/about-us";
function SectionPage({
  children,
  id,
  className,
}: {
  children?: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`h-[100vh] w-full flex justify-center items-center ${className} relative`}
    >
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <section className="h-[300vh] w-[100vw] relative ">
      <img
        id="water-image"
        src={LandingImg}
        alt="water"
        className="fixed top-0 left-0 opacity-100  w-full h-full object-cover  -z-10"
      />
      <Navbar />
      <SectionPage
        id="home"
        className="bg-gradient-to-b from-50% to-100% to-gray-700"
      >
        <div className="   w-full h-full flex flex-col justify-center items-center relative container mx-auto ">
          <section className="h-full  w-full flex flex-col justify-center items-center text-white ">
            <img src={Logo} alt="allchemistry-logo" className="w-[40vw]  " />

            <p className="text-xl uppercase  ">
              Destilada con ciencia, respaldada con trayectoria
            </p>
          </section>
        </div>
      </SectionPage>
      <SectionPage
        id="about"
        className="bg-gradient-to-b from-gray-700 to-gray-800"
      >
        <div className="   w-full h-full flex justify-center items-center container mx-auto   ">
          <section className="">
            <AboutUs />
          </section>
        </div>
      </SectionPage>

      <SectionPage
        id="products"
        className="bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <div className="   w-full h-full justify-center items-center    container mx-auto  ">
          <section className="flex-grow  w-full h-full ">
            <ProductList />
          </section>
        </div>
      </SectionPage>
      <Footer />
    </section>
  );
}
