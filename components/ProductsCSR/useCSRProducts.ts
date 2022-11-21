import { useQuery } from "@tanstack/react-query";
import { getProductsForPage } from "../../APIs/getProducts";

const productsForPageQuery = (page: number) =>
  [["products", page], () => getProductsForPage(page)] as const;

export const useProductsForPage = (page: number) => {
  const result = useQuery(...productsForPageQuery(page));
  return result;
};
