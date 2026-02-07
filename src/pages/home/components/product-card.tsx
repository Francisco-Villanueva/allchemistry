import { Button } from "@/components/ui/button";
import type { Product } from "../../../utils/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Cylinder, Droplets, FlaskConical, Triangle } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="glass rounded-xl overflow-hidden hover-lift md:w-4/5 mx-auto">
      <div className="flex max-md:flex-col">
        {/* Image */}
        <div className="md:w-[280px] md:min-w-[280px] p-4 max-md:p-3">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg max-md:h-48"
          />
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col gap-4 p-6 max-md:p-4 max-md:pt-0">
          <div className="flex items-center gap-3">
            <FlaskConical className="size-5 text-blue-400" />
            <h2 className="text-xl max-md:text-lg uppercase font-semibold tracking-wide">
              {product.title}
            </h2>
          </div>

          <div className="section-divider" />

          <p className="text-gray-400 text-sm leading-relaxed max-md:text-xs">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Cylinder className="size-3.5" />
            <span>
              {product.presentations.join(" · ")} ({product.presentationType})
            </span>
          </div>

          <div className="mt-auto pt-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 px-0 gap-2"
                >
                  Ver detalles
                  <ArrowRight className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader></SheetHeader>
                <section className="flex-1 space-y-8 max-h-full overflow-auto p-8 text-gray-800">
                  <div className="flex flex-col gap-4 items-start">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="size-6 text-blue-600" />
                      <p className="text-2xl uppercase font-bold">
                        {product.title}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-gray-800">
                      <Droplets className="size-5 text-blue-500" />
                      <p className="text-lg font-medium">Principales Usos</p>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="space-y-2">
                      {product.uses.map((use, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-gray-600"
                        >
                          <Triangle className="size-2.5 mt-1.5 text-blue-400 flex-shrink-0" />
                          <p className="text-sm">{use}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="text-lg font-medium text-gray-800">
                      Presentaciones — {product.presentationType}
                    </p>
                    <div className="h-px bg-gray-200" />
                    <div className="flex flex-wrap gap-2">
                      {product.presentations.map((pres, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm"
                        >
                          {pres}
                        </span>
                      ))}
                    </div>
                  </div>

                  {product.technical && (
                    <div className="flex flex-col gap-3">
                      <p className="text-lg font-medium text-gray-800">
                        Especificaciones Técnicas
                      </p>
                      <div className="h-px bg-gray-200" />
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(product.technical).map(([key, val]) => (
                          <div
                            key={key}
                            className="flex flex-col p-3 bg-gray-50 rounded-lg"
                          >
                            <span className="text-xs text-gray-500">
                              {key}
                            </span>
                            <span className="text-sm font-medium text-gray-800">
                              {val}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </section>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
