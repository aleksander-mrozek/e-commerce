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

{
  /*

// count total number of products for pagination purpose

// !!! NOT TO BE EXECUTED FOR CSR DUE TO SERVER LOAD
// TO BE USED ONLY FOR SSG TO RUN API REQUEST AND COUNT PRODUCTS ONLY ONCE DURING BUILD

export const countProducts = async (count = 0): Promise<number> => {
  const PRODUCTS_PER_FETCH = 501;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_FETCH}&offset=${count}`
  );
  const data = (await res.json()) as StoreApiResponse[];
  const newCount = count + data.length;
  if (data.length === PRODUCTS_PER_FETCH) {
    return countProducts(newCount);
  } else {
    return newCount;
  }
};

export const NUMBER_OF_PRODUCTS = await countProducts();

  */
}
