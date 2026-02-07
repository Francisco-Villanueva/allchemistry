import LandingImg from "../../assets/landing.jpg";
import "../../App.css";
import { ProductList } from "./components/product-list";
import { Navbar } from "../../components/nav-bar";
import { Footer } from "../../components/footer";
import { AboutUs } from "./components/about-us";
import { FaqSection } from "@/components/faq-questions";
import { LandingPage } from "@/components/landing-page";
import { WorkWithUs } from "./components/work-with-us";

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
      className={`${className} min-h-[100vh] w-full flex justify-center items-center`}
    >
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <section className="w-[100vw] min-h-[100vh] relative overflow-x-hidden flex flex-col text-white">
      <img
        id="water-image"
        src={LandingImg}
        alt="water"
        className="absolute top-0 left-0 opacity-100 w-screen h-screen object-cover -z-10"
      />
      <Navbar />

      {/* Hero */}
      <SectionPage
        id="home"
        className="bg-gradient-to-b from-70% to-100% from-black/75 to-slate-800/95"
      >
        <section className="flex-grow size-full">
          <LandingPage />
        </section>
      </SectionPage>

      {/* About */}
      <SectionPage
        id="about"
        className="bg-gradient-to-b from-slate-800/95 to-slate-900 pt-[10vh]"
      >
        <div className="size-full max-md:w-[95%] max-md:mx-auto container mx-auto">
          <AboutUs />
        </div>
      </SectionPage>

      {/* Products */}
      <SectionPage
        id="products"
        className="bg-gradient-to-b from-slate-900 to-gray-900 pt-[10vh]"
      >
        <div className="size-full max-md:w-[95%] max-md:mx-auto container mx-auto">
          <ProductList />
        </div>
      </SectionPage>

      {/* FAQ */}
      <section
        id="faq"
        className="min-h-[50vh] bg-gradient-to-b from-gray-900 to-gray-950 pt-[10vh] pb-[5vh]"
      >
        <div className="flex-grow size-full max-md:w-[95%] max-md:mx-auto container mx-auto">
          <FaqSection />
        </div>
      </section>

      {/* Work with us */}
      <section
        id="work-with-us"
        className="bg-gradient-to-b from-gray-950 to-gray-950 py-[10vh]"
      >
        <div className="size-full flex items-center justify-center container mx-auto">
          <WorkWithUs />
        </div>
      </section>

      <Footer />
    </section>
  );
}
