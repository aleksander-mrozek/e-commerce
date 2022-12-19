import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const signUpFormSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type SignUpFormData = yup.InferType<typeof signUpFormSchema>;

const SignUpPage = () => {
  const session = useSession();
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema),
  });

  const onSubmit = handleSubmit(
    async (data) =>
      await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
  );

  if (session.status === "authenticated") {
    router.push("/");
    return null;
  }

  return (
    <form className="mx-auto mt-8 mb-0 max-w-md space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Email"
            required
            {...register("email", { required: true })}
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

        <span role="alert" className="text-red-500 text-sm font-bold">
          {formState.errors.email?.message}
        </span>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>

        <input
          type="password"
          id="password"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          placeholder="Password"
          required
          {...register("password", { required: true })}
        />

        <span role="alert" className="text-red-500 text-sm font-bold">
          {formState.errors.password?.message}
        </span>
      </div>

      <button
        type="submit"
        className="ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignUpPage;
