import { ReviewContentFragment } from "../../generated/graphql";

interface ProductReviewItemProps {
  review: ReviewContentFragment;
}

export const ProductReviewListItem = ({ review }: ProductReviewItemProps) => {
  return (
    <li className="border mt-4 bg-white p-2 max-w-md mx-auto shadow-md rounded-md">
      <h3 className="font-bold">{review.headline}</h3>
      <p className="my-2 italic">{review.content}</p>
      {review.rating && (
        <div className="text-sm">
          Rating:{" "}
          <span className="underline underline-offset-2">{review.rating}</span>{" "}
          / 5
        </div>
      )}
      <footer className="pl-4">{review.name}</footer>
    </li>
  );
};
