import Image1 from "../../../assets/products/1.jpg";
import Image2 from "../../../assets/products/2.jpg";
import Image3 from "../../../assets/products/3.jpg";
import Image4 from "../../../assets/products/4.jpg";
import Image5 from "../../../assets/products/5.jpg";
import Image6 from "../../../assets/products/6.jpg";
import Image7 from "../../../assets/products/7.jpg";

const items = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

export function ProductsCarousel() {
  // Duplicamos el array varias veces para que el loop sea largo
  const infiniteItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden h-48">
      <div className="flex animate-marquee">
        {infiniteItems.map((src, idx) => (
          <div
            key={idx}
            className="w-48 h-full flex-shrink-0 mx-4 flex items-center justify-center"
          >
            <img src={src} alt="" className="h-40 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
