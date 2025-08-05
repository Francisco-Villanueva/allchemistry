import { Button } from "@/components/ui/button";
import type { Product } from "../../../utils/products";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftFromLine, Cylinder, Droplets, Triangle } from "lucide-react";
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      className={`flex  max-md:flex-col  h-full md:w-3/4 mx-auto  gap-4 overflow-auto  rounded-xl p- bg-gray-800 `}
    >
      <div className="flex flex-col justify-center items-center  gap-4 md:w-[250px] md:min-w-[250px] md:max-w-[250px] ">
        <img
          src={product.image}
          alt={product.title}
          className="size-full object-cover rounded-lg"
        />
      </div>

      <div className={`flex-grow  flex flex-col gap-4 p-4 `}>
        <h2 className="text-xl uppercase font-semibold">{product.title}</h2>
        <hr />
        <p className="font-light">{product.description}</p>
        <h4>Presentaciones:</h4>
        <p>
          {product.presentations.join(" - ")} ({product.presentationType})
        </p>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button className="m-1">
            Ver más
            <ArrowLeftFromLine />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader></SheetHeader>
          <section className=" flex-1 space-y-8 max-h-full overflow-auto  p-8 text-gray-800">
            <div className="flex flex-col gap-4 jusce items-start  ">
              <p className="text-2xl uppercase font-bold">{product.title}</p>
              <p className="text-sm">{product.description}</p>
              <img
                src={product.image}
                alt={product.title}
                className="size-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Droplets className="size-5" />
                <p className="text-lg ">Principales Usos</p>
              </div>
              <hr />
              <div>
                {product.uses.map((use) => (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Triangle className="size-3" />
                    <p> {use}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-gray-600">
                Tamaños y presentaciones - {product.presentationType}
              </p>
              <hr />
              <div>
                {product.presentations.map((use) => (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Cylinder className="size-3" />
                    <p> {use}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductCard;
