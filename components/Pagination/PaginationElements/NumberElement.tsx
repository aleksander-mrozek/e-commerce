import Link from "next/link";

import { useCSRPagination } from "../../ProductsCSR/useCSRPagination";

interface NumberProps {
  value: number;
}

export const NumberElement = ({ value }: NumberProps) => {
  const { page, getPageHref } = useCSRPagination();
  return (
    <Link href={getPageHref(value)}>
      <a className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
        <span className={page === value ? "text-blue-600" : ""}>{value}</span>
      </a>
    </Link>
  );
};
