import LandingImg from "../../assets/landing.jpg";
import "../../App.css";
import { ProductList } from "./components/product-list";
import { Navbar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import { AboutUs } from "./components/about-us";
import { FaqSection } from "@/components/faq-questions";
import { LandingPage } from "@/components/landing-page";
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
      className={` ${className}  min-h-[100vh] w-full flex justify-center items-center   `}
    >
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <section className="w-[100vw] min-h-[100vh]  relative overflow-x-hidden flex flex-col text-white ">
      <img
        id="water-image"
        src={LandingImg}
        alt="water"
        className="fixed top-0 left-0 opacity-100  w-full h-full object-cover  -z-10 "
      />
      <Navbar />
      <SectionPage
        id="home"
        className="bg-gradient-to-b from-70% to-100% from-black/75 to-gray-700 pt-0"
      >
        <LandingPage />
      </SectionPage>
      <SectionPage
        id="about"
        className="bg-gradient-to-b from-gray-700 to-gray-800 pt-[10vh]"
      >
        <div className="  size-full   container mx-auto   ">
          <AboutUs />
        </div>
      </SectionPage>

      <SectionPage
        id="products"
        className="bg-gradient-to-b from-gray-800 to-gray-900 pt-[10vh]"
      >
        <div className="    size-full    container mx-auto ">
          <ProductList />
        </div>
      </SectionPage>
      <section
        id="faq"
        className=" min-h-[50vh] bg-gradient-to-b from-gray-900 to-gray-950  pt-[10vh] "
      >
        <div className="   flex-grow  size-full    container mx-auto   ">
          <FaqSection />
        </div>
      </section>

      <Footer />
    </section>
  );
}
