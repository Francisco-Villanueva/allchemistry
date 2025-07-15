import type { Product } from "../../../utils/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      className={`flex   h-full w-3/4 mx-auto  gap-4 overflow-auto  rounded-xl p- bg-gray-800 `}
    >
      <div className="flex flex-col justify-center items-center  gap-4 w-[250px] min-w-[250px] max-w-[250px]">
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
        <p>{product.presentations.join(" - ")} (Bidón PVC / PET)</p>
      </div>

      {/* <section>
        <div>
          <h4>Usos habituales:</h4>
          <ul>
            {product.uses.map((use, idx) => (
              <li key={idx}>{use}</li>
            ))}
          </ul>
        </div>
        {product.technical && (
          <>
            <h4>Información técnica:</h4>
            <div>
              {Object.entries(product.technical).map(([key, value], idx) => (
                <li key={idx}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </div>
          </>
        )}
      </section> */}
    </div>
  );
};

export default ProductCard;
