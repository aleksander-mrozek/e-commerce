import Link from "next/link";

// import { NUMBER_OF_PRODUCTS, PRODUCTS_PER_PAGE } from "../../APIs/getProducts";
// import { PaginationLayout } from "../Pagination/PaginationLayout";

import { useCSRPagination } from "./useCSRPagination";

export const ProductsCSRPagination = () => {
  const { page, getPageHref } = useCSRPagination();

  // const NUMBER_OF_PAGES = Math.ceil(NUMBER_OF_PRODUCTS / PRODUCTS_PER_PAGE);

  const prevPage = page - 1;
  const nextPage = page + 1;
  const prevPageHref = page > 1 ? getPageHref(prevPage) : getPageHref(1);
  const nextPageHref = page < 10 ? getPageHref(nextPage) : getPageHref(10);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </a>
        <a className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          {/*

          // display range of items currently displayed and total number of products

          <p className="text-sm text-gray-700">
            Showing{" "}
            {page === 1
              ? page.toString()
              : ((page - 1) * PRODUCTS_PER_PAGE + 1).toString()}{" "}
            to{" "}
            {page === NUMBER_OF_PAGES
              ? NUMBER_OF_PRODUCTS
              : (PRODUCTS_PER_PAGE * page).toString()}{" "}
            of {NUMBER_OF_PRODUCTS.toString()} results
          </p>

          */}
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <Link href={prevPageHref}>
              <a className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
            {/*

            // place PaginationLayout component to show user friendly navigation for product list display

            <PaginationLayout numPages={NUMBER_OF_PAGES} />

            */}
            <Link href={nextPageHref}>
              <a className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
