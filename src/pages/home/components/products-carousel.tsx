import Image1 from "../../../assets/products/1.jpg";
import Image2 from "../../../assets/products/2.jpg";
import Image3 from "../../../assets/products/3.jpg";
import Image4 from "../../../assets/products/4.jpg";
import Image5 from "../../../assets/products/5.jpg";
import Image6 from "../../../assets/products/6.jpg";
import Image7 from "../../../assets/products/7.jpg";
const items = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export function ProductsCarousel() {
  return (
    <div className="overflow-hidden w-full h-full carousel">
      <div
        className=" carousel-track h-full"
        style={{ scrollBehavior: "auto" }}
      >
        {[...items].map((src, idx) => (
          <div
            key={idx}
            className="w-48 h-full bg-transparent rounded-lg mx-8 flex items-center justify-center text-gray-500 text-xl font-bold"
          >
            <img
              src={src} // Placeholder image path
              alt=""
              className="h-32 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
