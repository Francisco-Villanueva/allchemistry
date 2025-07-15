import { products } from "../../../utils/products";
import ProductCard from "./product-card";

export function ProductList() {
  return (
    <div className="  w-full  h-full  flex flex-col gap-8 py-20 ">
      <section className="px-10 w-full text-center">
        <p className="text-3xl uppercase font-anton ">Nuestors productos</p>
      </section>
      <div className="grid grid-cols-3  gap-10  h-[80%] max-h-[80%]  ">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
