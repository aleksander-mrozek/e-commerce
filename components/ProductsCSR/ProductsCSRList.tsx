import { ProductCSRListItem } from "./ProductCSR";
import { useProductsForPage } from "./useProductsCSR";

interface ProductsCSRProps {
  page: number;
}

export const ProductsCSRList = ({ page }: ProductsCSRProps) => {
  const result = useProductsForPage(page);
  const products = result.data!;
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products?.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductCSRListItem
              data={{
                title: product.title,
                thumbnailUrl: product.image,
                thumbnailAlt: product.title,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};
