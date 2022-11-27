import { ProductReviewList } from "./ProductReviewList";

interface ProductReviewContainerProps {
  productSlug: string;
}

export const ProductReviewContainer = ({
  productSlug,
}: ProductReviewContainerProps) => {
  return (
    <div>
      <ProductReviewList productSlug={productSlug} />
    </div>
  );
};
