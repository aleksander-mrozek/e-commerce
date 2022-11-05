import { useCSRPagination } from "../ProductsCSR/useCSRPagination";
import { NumberElement } from "./PaginationElements/NumberElement";
import { SpreadElement } from "./PaginationElements/SpreadElement";

interface PaginationLayoutProps {
  numPages: number;
}

export const PaginationLayout = ({ numPages }: PaginationLayoutProps) => {
  const { page } = useCSRPagination();

  if (page < 5) {
    const elements = [];
    const iterations = 5;
    for (let i = 0; i < iterations; i++) {
      elements.push(<NumberElement value={i + 1} />);
    }
    return (
      <>
        {elements}
        <SpreadElement />
        <NumberElement value={numPages} />
      </>
    );
  }
  if (numPages - page < 4) {
    const elements = [];
    const iterations = 5;
    for (let i = 0; i < iterations; i++) {
      elements.push(
        <NumberElement value={numPages - (iterations - (i + 1))} />
      );
    }
    return (
      <>
        <NumberElement value={1} />
        <SpreadElement />
        {elements}
      </>
    );
  }
  return (
    <>
      <NumberElement value={1} />
      <SpreadElement />
      <NumberElement value={page - 1} />
      <NumberElement value={page} />
      <NumberElement value={page + 1} />
      <SpreadElement />
      <NumberElement value={numPages} />
    </>
  );
};
