import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useCreateProductReviewMutation } from "../../generated/graphql";

const reviewFormSchema = yup
  .object({
    headline: yup.string().required(),
    content: yup.string().required(),
    rating: yup.number().min(1).max(5).required(),
    name: yup.string().required(),
    email: yup.string().email().required(),
  })
  .required();

type ReviewFormData = yup.InferType<typeof reviewFormSchema>;

interface ProductReviewFormProps {
  productSlug: string;
}

export const ProductReviewForm = ({ productSlug }: ProductReviewFormProps) => {
  const { register, handleSubmit } = useForm<ReviewFormData>({
    resolver: yupResolver(reviewFormSchema),
  });

  const [createReview, { data, loading, error }] =
    useCreateProductReviewMutation();

  const onSubmit = handleSubmit((data) => {
    createReview({
      variables: {
        review: {
          ...data,
          product: {
            connect: {
              slug: productSlug,
            },
          },
        },
      },
    });
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Review this product!</h1>
      </div>

      <form
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        onSubmit={onSubmit}
      >
        <div className="relative">
          <label>
            Headline
            <input
              required
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Headline"
              {...register("headline")}
            />
          </label>
        </div>
        <div className="relative">
          <label>
            Content
            <input
              required
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Content"
              {...register("content")}
            />
          </label>
        </div>
        <div className="relative">
          <label>
            Rating
            <input
              required
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Rating"
              {...register("rating")}
            />
          </label>
        </div>
        <div className="relative">
          <label>
            Name
            <input
              required
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Name"
              {...register("name")}
            />
          </label>
        </div>
        <div className="relative">
          <label>
            Email
            <input
              required
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Email"
              {...register("email")}
            />
          </label>
        </div>

        <button
          type="submit"
          className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Add review
        </button>
      </form>
    </div>
  );
};
