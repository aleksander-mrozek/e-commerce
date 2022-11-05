import { useRouter } from "next/router";
import { useCallback } from "react";

export const useCSRPagination = () => {
  const router = useRouter();

  const page =
    (router.query.page && Number.parseInt(router.query.page.toString())) || 1;

  const getPageHref = useCallback(
    (page: number) => {
      return {
        pathname: router.pathname,
        query: { ...router.query, page: page },
      };
    },
    [router.pathname, router.query]
  );

  return { page, getPageHref };
};
