import Image1 from "../../../assets/products/1.jpg";
import Image2 from "../../../assets/products/2.jpg";
import Image3 from "../../../assets/products/3.jpg";
import Image4 from "../../../assets/products/4.jpg";
import Image5 from "../../../assets/products/5.jpg";
import Image6 from "../../../assets/products/6.jpg";
import Image7 from "../../../assets/products/7.jpg";
import Image8 from "../../../assets/products/8.jpg";
import Image9 from "../../../assets/products/9.jpg";
import Image10 from "../../../assets/products/10.jpg";
import Image11 from "../../../assets/products/11.jpg";
import Image12 from "../../../assets/products/12.jpg";
import Image13 from "../../../assets/products/13.jpg";
import Image14 from "../../../assets/products/14.jpg";
import Image15 from "../../../assets/products/15.jpg";

const items = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
  Image9, Image10, Image11, Image12, Image13, Image14, Image15,
];

export function ProductsCarousel() {
  const infiniteItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden h-48 carousel-fade">
      <div className="flex animate-marquee w-[300%]">
        {infiniteItems.map((src, idx) => (
          <div
            key={idx}
            className="w-48 h-full flex-shrink-0 mx-3 flex items-center justify-center"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-40 object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
