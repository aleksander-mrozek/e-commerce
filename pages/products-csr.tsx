import { useQuery } from "@tanstack/react-query";

import { ProductListItem } from "../components/Product";
import { StoreApiResponse } from "../interfaces";

const getProducts = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products/");
  const data: StoreApiResponse[] = await res.json();
  return data;
};

const ProductsCSRPage = () => {
  const { isLoading, data, error } = useQuery(["products"], getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Ups! Something went wrong...</div>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((product) => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <ProductListItem
              data={{
                id: product.id,
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

export default ProductsCSRPage;
