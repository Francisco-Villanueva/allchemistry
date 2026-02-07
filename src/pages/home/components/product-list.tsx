import { products } from "../../../utils/products";
import ProductCard from "./product-card";

export function ProductList() {
  return (
    <div className="w-full h-full flex flex-col gap-16">
      <section className="w-full text-center space-y-3">
        <p className="text-5xl max-md:text-3xl uppercase font-anton">
          Nuestros productos y servicios
        </p>
        <div className="section-divider w-24 mx-auto" />
        <p className="text-gray-400 max-md:text-sm max-w-2xl mx-auto">
          Producción, envasado y venta de agua destilada, bidestilada y
          tridestilada con repartos en Bahía Blanca y la zona.
        </p>
      </section>
      <div className="flex flex-col gap-6">
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}
