import { products } from "../../../utils/products";
import ProductCard from "./product-card";

export function ProductList() {
  return (
    <div className="  w-full  h-full  flex flex-col gap-8  ">
      <section className="px-10 w-full text-center">
        <p className="text-3xl uppercase font-anton ">Nuestors productos</p>
      </section>
      <div className="flex flex-col gap-10   ">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
