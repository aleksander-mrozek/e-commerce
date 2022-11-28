import { ReviewContentFragment } from "../../generated/graphql";

interface ProductReviewItemProps {
  review: ReviewContentFragment;
  index: number;
}

export const ProductReviewListItem = ({
  review,
  index,
}: ProductReviewItemProps) => {
  const isOptimistic = review.id.startsWith("-");
  return (
    <li
      className={`border mt-4 bg-white p-2 max-w-md mx-auto shadow-md rounded-md ${
        isOptimistic ? "opacity-50" : ""
      }`}
    >
      <h3 className="underline">Review {index}</h3>
      <h4 className="font-bold">{review.headline}</h4>
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
