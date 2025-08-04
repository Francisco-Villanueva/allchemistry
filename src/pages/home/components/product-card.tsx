import { Button } from "@/components/ui/button";
import type { Product } from "../../../utils/products";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftFromLine } from "lucide-react";
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
          <Button>
            <ArrowLeftFromLine />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{product.title}</SheetTitle>
            <SheetDescription>{product.description}</SheetDescription>
          </SheetHeader>
          <section className=" flex-1  p-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum aspernatur iste nulla natus repellendus. In beatae
              alias est quisquam? Nulla, sit? Expedita voluptates necessitatibus
              dignissimos enim totam molestias dolorem cupiditate hic? Quas
              dolorum nesciunt molestiae. Natus, saepe quas quisquam id
              accusamus corrupti debitis maiores dolorem possimus ea, odio
              nostrum itaque.
            </p>
          </section>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductCard;
