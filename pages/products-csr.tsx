import { ProductsCSRList } from "../components/ProductsCSR/ProductsCSRList";
import {
  ProductsCSRPagination,
  useCSRPagination,
} from "../components/ProductsCSR/ProductsCSRPagination";

const ProductsCSRPage = () => {
  const { page } = useCSRPagination();

  return (
    <>
      <ProductsCSRList page={page} />
      <ProductsCSRPagination />
    </>
  );
};

export default ProductsCSRPage;
