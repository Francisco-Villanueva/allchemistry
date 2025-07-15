import type { Product } from "../../../utils/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col  h-full  gap-4 overflow-auto">
      <div className="flex flex-col gap-4 h-[180px]">
        <h2 className="text-2xl font-semibold">{product.title}</h2>
        <p>{product.description}</p>
      </div>

      <div>
        <h4>Usos habituales:</h4>
        <ul>
          {product.uses.map((use, idx) => (
            <li key={idx}>{use}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Presentaciones:</h4>
        <p>{product.presentations.join(" - ")} (Bidón PVC / PET)</p>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default ProductCard;
