import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useAddToNewsletterMutation = () =>
  useMutation({
    mutationKey: ["add-to-newsletter"],
    async mutationFn({ emailNewsletter }: { emailNewsletter: string }) {
      await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailNewsletter }),
      });
    },
  });

const newsletterFormSchema = yup
  .object({
    emailNewsletter: yup.string().email().required(),
  })
  .required();

type NewsletterFormData = yup.InferType<typeof newsletterFormSchema>;

interface NewsletterFormViewProps {
  status: "error" | "idle" | "loading" | "success";
  onSubmit: (formData: NewsletterFormData) => void;
}

export const NewsletterFormView = ({
  onSubmit,
  status,
}: NewsletterFormViewProps) => {
  const { register, handleSubmit } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterFormSchema),
  });

  const doSubmit = handleSubmit((data) => onSubmit(data));

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Sign in today!</h1>
      </div>

      <form
        className="mx-auto mt-8 mb-0 max-w-md space-y-4"
        onSubmit={doSubmit}
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              aria-label="emailNewsletter"
              data-testid="email-newsletter-input"
              type="email"
              id="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
              required
              {...register("emailNewsletter", { required: "Enter email" })}
            />

            <span className="absolute inset-y-0 right-4 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <button
          data-testid="email-newsletter-submit"
          type="submit"
          className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Try and submit!
        </button>
      </form>
      <p>{status === "success" && "submitted successfully"}</p>
    </div>
  );
};

export const NewsletterForm = () => {
  const { mutate, status } = useAddToNewsletterMutation();
  return <NewsletterFormView onSubmit={mutate} status={status} />;
};
