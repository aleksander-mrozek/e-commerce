import { StoreApiResponse } from "../interfaces";

export const PRODUCTS_PER_PAGE = 15;
export const getProductsForPage = async (page: number) => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${
      PRODUCTS_PER_PAGE * (page - 1)
    }`
  );
  const data: StoreApiResponse[] = await res.json();
  return data;
};
