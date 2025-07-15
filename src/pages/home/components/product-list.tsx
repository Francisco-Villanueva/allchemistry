import { products } from "../../../utils/products";
import ProductCard from "./product-card";

export function ProductList() {
  return (
    <div className="  w-full  h-full  flex flex-col gap-10  ">
      <section className="w-full text-center">
        <p className="text-3xl uppercase font-anton ">Nuestors productos</p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          corporis rem officia consequatur dolores labore nulla quibusdam
          nesciunt iusto rerum.
        </p>
      </section>
      <div className="flex flex-col gap-4   ">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
