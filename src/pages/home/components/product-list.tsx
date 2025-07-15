import { products } from "../../../utils/products";
import ProductCard from "./product-card";

export function ProductList() {
  return (
    <div className="  w-full  h-full  flex flex-col gap-20  ">
      <section className="w-full text-center space-y-2">
        <p className="text-6xl max-md:text-4xl uppercase font-anton ">
          Nuestors productos y servicios
        </p>
        <p className="text-gray-400 max-md:text-sm">
          Producción, envasado y venta de agua destilada , bidestilada y
          tridestilada con repartos en Bahía Blanca y la zona.
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
