import { useGetReviewsForProductSlugQuery } from "../../generated/graphql";
import { ProductReviewListItem } from "./ProductReviewListItem";

interface ProductReviewListProps {
  productSlug: string;
}

export const ProductReviewList = ({ productSlug }: ProductReviewListProps) => {
  const { data, loading, error, client } = useGetReviewsForProductSlugQuery({
    variables: {
      slug: productSlug,
    },
  });

  if (!data?.product) {
    return null;
  }

  return (
    <ul>
      {data.product.reviews.map((review, i) => (
        <ProductReviewListItem key={review.id} index={i + 1} review={review} />
      ))}
    </ul>
  );
};
